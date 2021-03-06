import * as tokenService from "./tokenService"

const BASE_URL = "/api/auth"

function signup(user) {
	return fetch(`${BASE_URL}/signup`, {
		method: "POST",
		headers: new Headers({ "Content-Type": "application/json" }),
		body: JSON.stringify(user),
	})
		.then((res) => {
			return res.json()
		})
		.then((json) => {
			if (json.token) return json.token
			throw new Error(json.err)
		})
		.then((token) => {
			tokenService.setToken(token)
		})
		.catch((err) => {})
}

function getUser() {
	return tokenService.getUserFromToken()
}

function logout() {
	tokenService.removeToken()
}

function login(credentials) {
	return fetch(`${BASE_URL}/login`, {
		method: "POST",
		headers: new Headers({ "Content-Type": "application/json" }),
		body: JSON.stringify(credentials),
	})
		.then((res) => {
			// Valid login if res.ok
			if (res.ok) return res.json()
			throw new Error("Bad Credentials")
		})
		.then(({ token }) => tokenService.setToken(token))
		.catch((err) => {})
}

export { signup, getUser, logout, login }
