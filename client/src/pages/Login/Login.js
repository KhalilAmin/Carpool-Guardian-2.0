import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


class Login extends Component {
	constructor() {
		super()
		this.state = {
			// username: '',
			email: '',
			password: '',
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
		console.log(this.state.email)
		// console.log(this.state.redirectTo)
		this.props._login(this.state.email, this.state.password)
		this.setState({
			redirectTo: '/Temp',
			loggedIn: true,
			
		})
		// .then (<Redirect to={"/Temp"} />)
		
	}

	render() {
		
		if (this.state.loggedIn) {
			return <Redirect to="/Temp" />
			console.log(this.state)
		} else {
			return (
				<div className="Login">
					<h1>Guardian Login</h1>
					<form>
						<label htmlFor="email">Email: </label>
						<input
							type="text"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
						<label htmlFor="password">Password: </label>
						<input
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
						<button onClick={this.handleSubmit}>Login</button>
					</form>

				</div>
			)
		}
	}
}

export default Login
