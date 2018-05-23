import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import TeacherLogin from './pages/teacherLogin'
import guardianSignup from './pages/guardianSignup'
import teacherSignup from './pages/teacherSignup'
import Header from './components/Header'
// import Home from './components/Home'
import Home from './pages/Home'
// import Teacher from "./pages/Teacher"
// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Login from "./pages/Login"
import Demo from "./pages/Demo"
import Parent from "./pages/Parent"
import Guardian from "./pages/GuardianPortal"
import Temp from "./pages/Temp";
import Nav from "./components/Nav";
import School from "./pages/School";
import CardHeading from "./components/CardHeading";
import CardWrapper from "./components/CardWrapper";
import TeacherPortal from "./pages/TeacherPortal";



class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			isTeacher: false,
			user: null
		}
		this._logout = this._logout.bind(this)
		// this._login = this._login.bind(this)
		this._login = this._login
		this._teacherlogin = this._teacherlogin.bind(this)
		// this._teacherlogin = this._teacherlogin
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
					isTeacher: false,
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

// import GuardianForm from "./components/Form/GuardianForm.js";

// const App = () => (
//   <Router>
//     <div>
//       <Switch>
//         <Route exact path="/" component={Login} />
//         <Route exact path="/Demo" component={Demo} />
//         <Route exact path="/Teacher" component={Teacher} />
//         <Route exact path="/Parent" component={Parent} />
//         <Route exact path="/Temp" component={Temp} />
//         <Route exact path="/School" component={School} />
//         <Route exact path="/TeacherSignUp" component={TeacherSignUp} /> 
//         {/* TEACHER SIGN UP WILL NOT BE A PAGE IN THE FINAL PRODUCT - JUST HERE NOW SO WE CAN ADD TO THE DB */}
//         <Route exact path="/TeacherPortal" component={TeacherPortal} />

	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					isTeacher: false,
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
						isTeacher: false,
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
				console.log("Teacher Log in");
				console.log(response);
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						isTeacher: true,
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
						<Route exact path="/" render={() => <Home user={this.state.user} isTeacher={this.state.isTeacher}/>} />
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
						<Route exact path="/TeacherPortal" component={() => (
							this.state.loggedIn ? (
								<TeacherPortal />
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
// import TestWebCam from "./pages/TestWebCam";
// // import GuardianForm from "./components/Form/GuardianForm.js";
// const App = () => (
//   <Router>
//     <div>
//       <Switch>
//         <Route exact path="/" component={Login} />
//         <Route exact path="/Demo" component={Demo} />
//         <Route exact path="/Parent" component={Parent} />
//         <Route exact path="/Guardian" component={Guardian} />
//         <Route exact path="/Temp" component={Temp} />
//         <Route exact path="/School" component={School} />
//         <Route exact path="/TeacherSignUp" component={TeacherSignUp} /> 
//         {/* TEACHER SIGN UP WILL NOT BE A PAGE IN THE FINAL PRODUCT - JUST HERE NOW SO WE CAN ADD TO THE DB */}
//         <Route exact path="/TeacherPortal" component={TeacherPortal} />
//         <Route exact path="/TestWebCam" component={TestWebCam} />

//       </Switch>
//     </div>
//   </Router>
// );

export default App