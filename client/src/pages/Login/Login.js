import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

// import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import { Input, FormBtn} from "../../components/Form";
import "./login.css";

class Login extends Component {

	state = {
		email: "",
		password: "",
		redirectTo: null
	}
	
	handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
		});
		console.log("LOG", this.state.email, this.state.password)
	};
	
	handleSubmit = event => {
		event.preventDefault()
		// console.log(this.state.redirectTo)
		this.props._login({email: this.state.email, password:this.state.password}) //PAT CHANGE this.props._login(email, password)
		this.setState({
			redirectTo: '/Temp',
			loggedIn: true,
			
		})
		
	}



	render() {
		
		if (this.state.loggedIn) {
			return <Redirect to="/Temp" />
			console.log(this.state)
		} else {
			return (
				<div className="Login">
					<h2>Submit Login Information Below</h2>
					<form>
						<label htmlFor="email">Email: </label>
						<input
							type="text"
							name="email"
							value={this.state.email}
							onChange={this.handleInputChange} //PAT CHANGE FROM this.handleChange
						/>
						<label htmlFor="password">Password: </label>
						<input
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleInputChange} //PAT CHANGE FROM this.handleChange
						/>
						<button onClick={this.handleSubmit}>Login</button>
					</form>

				</div>
			)
		}
	}
}



export default Login
