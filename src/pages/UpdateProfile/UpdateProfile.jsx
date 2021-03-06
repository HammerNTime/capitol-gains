import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import "./UpdateProfile.css"
import moon from "../../assets/Avatars/moon.png"

// Assets

// Services
import { updateProfile } from "../../services/userService"

// Components
import AvatarSelection from "../AvatarSelection/AvatarSelection"

const UpdateProfile = (props) => {
	const [popup, setPopup] = useState(false)
	const history = useHistory()
	const [authError, setAuthError] = useState(false)
	const [formData, setFormData] = useState({
		handle: props.currentUser.handle,
		avatar: moon,
	})

	const handlePopup = () => {
		setPopup(!popup)
	}

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			await updateProfile(props.currentUser._id, formData)
			props.handleSignupOrLogin() // created in userService.js
			//props.handleSignupOrLogin();

			history.push(`/myProfile/${props.currentUser._id}`)
		} catch (error) {
			setAuthError(error.message)
		}
	}

	return (
		<div className="update-page">
			{popup && (
				<AvatarSelection
					formData={formData}
					handleChange={handleChange}
					handlePopup={handlePopup}
				/>
			)}

			<div className="update-form-container">
				<div className="update-title-container">
					<h1 id="update-profile">Update Profile</h1>
					{authError ? <h3>{authError}</h3> : <h3 id="sub2"></h3>}
				</div>
				<form className="update-form" onSubmit={handleSubmit}>
					<input id="update-name"
						onChange={handleChange}
						value={formData.handle}
						autoComplete="off"
						required
						name="handle"
						type="text"
						placeholder="Enter a New Handle"
					/>
					<button id="update-profilePic-button" type="button" onClick={handlePopup}>
						Change Profile Picture
					</button>

					<div className="redirect-container">
						{/* <className="redirect-link" to="/myProfile"> */}
						<button id="update-button" type="submit">
							Submit Changes
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default UpdateProfile
