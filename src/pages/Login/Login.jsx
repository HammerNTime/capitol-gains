import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import styles from "./Login.css"
import * as authService from "../../services/authService"

import { login } from "../../services/authService"

const LogIn = (props) => {
	const history = useHistory()
	const [authError, setAuthError] = useState(false)
	const [formData, setFormData] = useState({
		// remove handle, and avatar from formData
		email: "",
		password: "",
	})

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			await login(formData) // replaced signup with login
			props.handleSignupOrLogin()
			history.push("/")
		} catch (error) {
			setAuthError(error.message)
			setFormData({
				// updated our form reset
				email: "",
				password: "",
			})
		}
	}

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	return (
		<div className="login-page">
			<div className="login-form-container">
				<div className="login-title-container">
					<h1>Login</h1>
					{authError ? (
						<h3>{authError}</h3>
					) : (
						<h3>Enter your login information</h3>
					)}
				</div>

				<form className="register-form" onSubmit={handleSubmit}>
					<input
						id="login-Email"
						onChange={handleChange}
						value={formData.email}
						autoComplete="off"
						required
						name="email"
						type="email"
						placeholder="Email"
					/>
					<input
						id="login-Password"
						onChange={handleChange}
						value={formData.password}
						autoComplete="off"
						required
						name="password"
						type="password"
						placeholder="Password"
					/>
					<button id="login-btn" autoComplete="off" type="submit">
						SIGN IN
					</button>
				</form>

				<div className="redirect-container">
					<p id="need-an-account">Need an account?</p>
					<Link className="redirect-link" to="/signup">
						<p id="sign-up">Sign Up</p>
					</Link>
				</div>
			</div>
		</div>
	)
}
export default LogIn

