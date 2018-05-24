import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

// import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import { Input, FormBtn} from "../../components/Form";
import "./login.css";

class Login extends Component {
	//TREVOR OLD
	// constructor() {
	// 	super()
	// 	this.state = {
	// 		// username: '',
	// 		email: '',
	// 		password: '',
	// 		redirectTo: null
	// 	}
		
	// 	this.handleSubmit = this.handleSubmit.bind(this)
	// 	this.handleChange = this.handleChange.bind(this)
	// }
	//TREVOR OLD

	//PAT NEW
	state = {
		email: "",
		password: "",
		redirectTo: null
	}
	//PAT NEW

	//TREVOR OLD
	// handleChange(event) {
	// 	this.setState({
	// 		[event.target.name]: event.target.value
	// 	})
	// }
	//TREVOR OLD

	//PAT NEW
	handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
		});
		console.log("LOG", this.state.email, this.state.password)
	};
	//PAT NEW


	//PAT NEW
	handleSubmit = event => {
		event.preventDefault()
		// console.log(this.state.redirectTo)
		this.props._login({email: this.state.email, password:this.state.password}) //PAT CHANGE this.props._login(email, password)
		this.setState({
			redirectTo: '/Temp',
			loggedIn: true,
			
		})
		// .then (<Redirect to={"/Temp"} />)
	}

	//TREVOR OLD
	// handleSubmit(event) {
	// 	console.log("HERE I AM");
	// 	event.preventDefault()
	// 	console.log("THIS IS THE EMAIL", this.state.email)
	// 	// console.log(this.state.redirectTo)
	// 	this.props._login(this.state.email, this.state.password)
	// 	this.setState({
	// 		redirectTo: '/Temp',
	// 		loggedIn: true,
			
	// 	})
		// .then (<Redirect to={"/Temp"} />)	
	//}
	//TREVOR OLD

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
