import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import "./login.css";
import { Input, FormBtn } from "../../components/Form";
import FormControl from '@material-ui/core/FormControl';
import Lock from '@material-ui/icons/Lock';
import { Container } from '../../components/Grid/index';
import Grid from '@material-ui/core/Grid';
import Person from '@material-ui/icons/Person';

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
		this.props._login({ email: this.state.email, password: this.state.password }) //PAT CHANGE this.props._login(email, password)
		this.setState({
			redirectTo: '/Temp',
			loggedIn: true,

		})

	}



	render() {

		if (this.state.loggedIn) {
			return <Redirect to="/Temp" />
		} else {
			return (
				// <h2>Submit Login Information Below</h2>

				<Container>
					<Grid container justify="center" style={{ marginTop: 50 }}>
						<FormControl style={{ width: 400 }}>
							<Grid container spacing={8} alignItems="flex-end">
								<Grid item>
									<Person />
								</Grid>
								<Grid item sm={10}>
									<Input
										fullWidth
										type="text"
										name="email"
										value={this.state.email}
										onChange={this.handleInputChange} //PAT CHANGE FROM this.handleChange
										label="Email"
									/>
								</Grid>
							</Grid>
						</FormControl>

						<FormControl style={{ width: 400 }}>
							<Grid container spacing={8} alignItems="flex-end">
								<Grid item>
									<Lock />
								</Grid>
								<Grid item sm={8}>
									<Input
										fullWidth
										type="password"
										name="password"
										value={this.state.password}
										onChange={this.handleInputChange} //PAT CHANGE FROM this.handleChange
										label="Password"
									/>
								</Grid>
							</Grid>

						</FormControl>
						<FormControl alignItems="flex-end" justify="flex-start">

							<FormBtn onClick={this.handleSubmit}
								style={{ marginTop: 20, marginLeft: 30 }}
							>
								Login
						</FormBtn >

						</FormControl>
					</Grid>
				</Container>
			)
		}
	}
}



export default Login
