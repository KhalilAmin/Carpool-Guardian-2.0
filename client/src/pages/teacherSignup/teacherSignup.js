import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class teacherSignup extends Component {
	constructor() {
		super()
		this.state = {
			fName: '',
			lName: '',
            email: '',
            school: '',
			password: '',
			confirmPassword: '',
			isTeacher: ''
			// redirectTo: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault()
		// TODO - validate!
		axios
			.post('/auth/teachersignup', {
				fName: this.state.fName,
				lName: this.state.lName,
                email: this.state.email,
				school: this.state.school,
				phone: this.state.phone,
				password: this.state.password
			})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('youre good')
					this.setState({
						isTeacher: true
					})
				} else {
					console.log('duplicate')
				}
			})
	}
	render() {
		if (this.state.isTeacher && this.state.loggedIn) {
			return <Redirect to={'/TeacherPortal' } />
		}
		return (
			<div className="teacherSignup">
				<h1>Teacher Signup Form</h1>
				<label htmlFor="fName">Firstname: </label>
				<input
					type="text"
					name="fName"
					value={this.state.fName}
					onChange={this.handleChange}
				/>
				<label htmlFor="lName">Lastname: </label>
				<input
					type="text"
					name="lName"
					value={this.state.lName}
					onChange={this.handleChange}
				/>
				<label htmlFor="email">Email: </label>
				<input
					type="text"
					name="email"
					value={this.state.email}
					onChange={this.handleChange}
				/>
                <label htmlFor="school">School: </label>
				<input
					type="string"
					name="school"
					value={this.state.school}
					onChange={this.handleChange}
				/>
				 <label htmlFor="phone">Phone: </label>
				<input
					type="string"
					name="phone"
					value={this.state.phone}
					onChange={this.handleChange}
				/>
				<label htmlFor="password">Password: </label>
				<input
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
				/>
				<label htmlFor="confirmPassword">Confirm Password: </label>
				<input
					type="password"
					name="confirmPassword"
					value={this.state.confirmPassword}
					onChange={this.handleChange}
				/>
				<button onClick={this.handleSubmit}>Sign up</button>
			</div>
		)
	}
}

export default teacherSignup
