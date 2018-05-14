// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Login from "./pages/Login"
// import Demo from "./pages/Demo"
// import Teacher from "./pages/Teacher"
// import Parent from "./pages/Parent"
// import Temp from "./pages/Temp";
// import Nav from "./components/Nav";

// const App = () => (
//   <Router>
//     <div>
//       <Switch>
//          {/* <Route exact path="/" component={Login} /> */}
//         <Route exact path="/" component={Login} />
//         <Route exact path="/Demo" component={Demo} />
//         <Route exact path="/Teacher" component={Teacher} />
//         <Route exact path="/Parent" component={Parent} />
//         <Route exact path="/Temp" component={Temp} />
//       </Switch>
//     </div>
//   </Router>
// );

// export default App;




// From app.jsx

import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Header from './components/Header'
import Home from './components/Home'

const DisplayLinks = props => {
	if (props.loggedIn) {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li>
						<Link to="#" className="nav-link" onClick={props._logout}>
							Logout
						</Link>
					</li>
				</ul>
			</nav>
		)
	} else {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/login" className="nav-link">
							Login
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/signup" className="nav-link">
							Sign Up
						</Link>
					</li>
				</ul>
			</nav>
		)
	}
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
	}
	componentDidMount() {
		axios.get('/auth/user').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
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

	_login(username, password) {
		axios
			.post('/auth/login', {
				username,
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
				}
			})
	}

	render() {
		return (
			<div className="App">
				<h1>This is the main App component</h1>
				<Header user={this.state.user} />
				{/* LINKS to our different 'pages' */}
				<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
				{/*  ROUTES */}
				{/* <Route exact path="/" component={Home} /> */}
				<Route exact path="/" render={() => <Home user={this.state.user} />} />
				<Route
					exact
					path="/login"
					render={() =>
						<Login
							_login={this._login}
						
						/>}
				/>
				<Route exact path="/signup" component={Signup} />
				{/* <LoginForm _login={this._login} /> */}
			</div>
		)
	}
}

export default App
