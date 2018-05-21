import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class guardianSignup extends Component {
	constructor() {
		super()
		this.state = {
			fName: '',
			lName: '',
			email: '',
			phone: '',
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
			.post('/auth/signup', {
				fName: this.state.fName,
				lName: this.state.lName,
				email: this.state.email,
				phone: this.state.phone,
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
			<div className="guardianSignup">
				<h1>Guardian Signup Form</h1>
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

export default guardianSignup
