import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import TeacherLogin from './pages/teacherLogin'
import guardianSignup from './pages/guardianSignup'
import teacherSignup from './pages/teacherSignup'
import Header from './components/Header'
import Home from './components/Home'
import Teacher from "./pages/Teacher"
import Parent from "./pages/Parent"
import Temp from "./pages/Temp";
import Nav from "./components/Nav";
import Demo from "./pages/Demo"



class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
		this._teacherlogin = this._teacherlogin.bind(this)
	}
	componentDidMount() {
		axios.get('/auth/user').then(response => {
			console.log(response.data)
			if (response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
				
				console.log(this.state);
			}
			else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
		// .then(res => {
		// 	// console.log(res);
		// 	// if (this.state.loggedIn)
		// 		<Redirect to={'/Temp'} />
		// })
	}

	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login(email, password) {
		console.log(email);
		axios
			.post('/auth/login', {
				email,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
					// window.location = '/Temp';

				}
			})
	}

	_teacherlogin(email, password) {
		axios
			.post('/auth/teacherlogin', {
				email,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
					// window.location = '/Temp';

				}
			})
	}



	render() {
		return (
			<div className="App">
				<h1>Carpool Guardian 2.0</h1>
				<Header user={this.state.user} />
				{/* LINKS to our different 'pages' */}
				{/* <DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} /> */}
				<Nav _logout={this._logout} loggedIn={this.state.loggedIn} />
				{/* <Temp /> */}
				{/*  ROUTES */}
				{/* <Route exact path="/" component={Home} /> */}
				
					<Switch>
						<Route exact path="/" render={() => <Home user={this.state.user} />} />
						<Route exact path="/login" render={() => <Login _login={this._login} />} />
						<Route exact path="/teacherlogin" render={() => <TeacherLogin _teacherlogin={this._teacherlogin} />} />
						<Route exact path="/teacherSignup" component={teacherSignup} />
						<Route exact path="/guardianSignup" component={guardianSignup} />
						<Route exact path="/Demo" component={() => (
							this.state.loggedIn ? (
								<Demo />
							) : (
									<Redirect to={'/'} />
								)
						)
						}
						/>
						<Route exact path="/Teacher" component={() => (
							this.state.loggedIn ? (
								<Teacher />
							) : (
									<Redirect to={'/'} />
								)
						)
						}
						/>
						<Route exact path="/Parent" component={() => (
							this.state.loggedIn ? (
								<Parent />
							) : (
									<Redirect to={'/'} />
								)
						)
						}
						/>
						<Route exact path="/Temp" component={() => (
							this.state.loggedIn ? (
								<Temp />
							) : (
									<Redirect to={'/'} />
								)
						)
						}
						/>
					</Switch>
				
			</div>
		)
	}
}

export default App
