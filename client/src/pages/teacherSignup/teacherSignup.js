import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class teacherSignup extends Component {
	constructor() {
		super()
		this.state = {
			firstname: '',
			lastname: '',
            email: '',
            school: '',
			password: '',
			confirmPassword: '',
			redirectTo: null
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
				firstname: this.state.firstname,
				lastname: this.state.lastname,
                email: this.state.email,
                school: this.state.school,
				password: this.state.password
			})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('youre good')
					this.setState({
						redirectTo: '/Temp'
					})
				} else {
					console.log('duplicate')
				}
			})
	}
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<div className="teacherSignup">
				<h1>Teacher Signup Form</h1>
				<label htmlFor="firstname">Firstname: </label>
				<input
					type="text"
					name="firstname"
					value={this.state.firstname}
					onChange={this.handleChange}
				/>
				<label htmlFor="lastname">Lastname: </label>
				<input
					type="text"
					name="lastname"
					value={this.state.lastname}
					onChange={this.handleChange}
				/>
				<label htmlFor="email">Email: </label>
				<input
					type="text"
					name="email"
					value={this.state.email}
					onChange={this.handleChange}
				/>
                <label htmlFor="grade">School: </label>
				<input
					type="string"
					name="school"
					value={this.state.school}
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
