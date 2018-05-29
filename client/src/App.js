import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
// import TeacherLogin from './pages/teacherLogin'
// import guardianSignup from './pages/guardianSignup'
// import teacherSignup from './pages/teacherSignup'
// import TeacherSignUp from './components/PatsTempComponents/TeacherSignUp'
import Header from './components/Header'
import Home from './pages/Home'
import Demo from "./pages/Demo"
import Parent from "./pages/Parent"
import GuardianPortal from "./pages/GuardianPortal"
import Temp from "./pages/Temp";
import Nav from "./components/Nav";
import School from "./pages/School";
import CardHeading from "./components/CardHeading";
import CardWrapper from "./components/CardWrapper";
import TeacherPortal from "./pages/TeacherPortal";
import API from "./utils/API";
import AddGuardCard from "./components/PatsTempComponents/AddGuardCard"
import AddTeacherCard from "./components/PatsTempComponents/AddTeacherCard"
import Modal from "./components/Modal";
import io from "socket.io-client";
// import TopButton from "./components/TopButton";
import TopBar from "./components/TopBar";



class App extends Component {


	state = {
		loggedIn: false,
		isGuardian: false,
		isTeacher: false,
		user: null,
		teacherIsOpen: false,
		guardianIsOpen: false
		//endpoint: "localhose:8080"
	}

	socket = io('localhost:8080');

	sendMessage = event => {
		event.preventDefault();
		console.log("here")
		this.socket.emit('SEND_MESSAGE', {
			something: "message!!!!!!!!!!"
		})
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

				//console.log(this.state);
			}
			else {
				this.setState({
					loggedIn: false,
					//isTeacher: false,
					user: null
				})
			}
		})

	}

	getMessage() {
		this.socket.on("RECEIVE_MESSAGE", function (data) {
			console.log("IT")
		})
	}





	_logout = event => {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					isGuardian: false,
					isTeacher: false,
					user: null
				})
			}
		})
	}

	_login = logininfo => {

		console.log("LOGININFO", logininfo);

		const email = logininfo.email;
		const password = logininfo.password;

		console.log("I WILL BE CHECKING IF THERE IS A GUARDIAN")
		API.getGuardian({
			email: email
		})
			.then(res => {
				//IF THERE IS A GUARDIAN THE RETURNED DATA WILL HAVE A LENGTH OF 1
				if (res.data.length > 0) {
					//THE USER IS A GUARDIAN
					this.setState({ isGuardian: true, })
					axios.post('/auth/login', {
						email,
						password
					})
						.then(response => {
							console.log(response)
							if (response.status === 200) {
								// update the state
								this.setState({
									loggedIn: true,
									user: response.data.user,
									email: email,
									password: password,
									userData: res.data[0]
								})
								// window.location = '/Temp';

							}
						})
				} else {
					API.getTeacher({
						email: email
					})
						.then(res => {
							if (res.data.length > 0) {
								//THE USER IS A TEACHER
								console.log("THIS IS THE RES FOR TEACHER", res.data[0])

								this.setState({ isTeacher: true })
								axios.post('/auth/teacherlogin', {
									email,
									password
								})
									.then(response => {
										console.log(response)
										if (response.status === 200) {
											// update the state
											this.setState({
												loggedIn: true,
												user: response.data.user,
												email: email,
												password: password,
												userData: res.data[0]
											})
											// window.location = '/Temp';

										}
									})
							}
						})
						.catch(err => console.log(err));
				}


			})
			.catch(err => console.log(err))
	}







	render() {




		return (
			<div className="App">
				<TopBar />
				<h1>Carpool Guardian 2.0</h1>
				{/* <Header user={this.state.user} /> */}
				<Nav _logout={this._logout} isTeacher={this.state.isTeacher} loggedIn={this.state.loggedIn} />
				<Header user={this.state.user} />

				<Switch>
					<Route exact path="/" render={() => (
						this.state.loggedIn ? (
							this.state.isTeacher ? (
								// <TeacherPortal />
								<Redirect to={'/TeacherPortal'} />
							) : (
									this.state.isGuardian ? (
										// <GuardianPortal />
										<Redirect to={'/GuardianPortal'} />
									) : (
											<Redirect to={'/'} />
										)
								)

						)
							: (
								<Redirect to={'/'} />
							)
					)
					}
					/>
					{/* <Route exact path="/login" component={<Login _login={this._login} />} /> */}
					<Route exact path="/login" render={() => <Login _login={this._login} />} />
					{/* <Route exact path="/teacherlogin" render={() => <TeacherLogin _teacherlogin={this._teacherlogin} />} /> */}
					{/* <Route exact path="/teacherSignup" component={teacherSignup} loggedIn={this.state.loggedIn} isTeacher={this.state.isTeacher} /> */}
					{/* <Route exact path="/guardianSignup" component={guardianSignup} loggedIn={this.state.loggedIn} isTeacher={this.state.isTeacher} /> */}
					<Route exact path="/School" component={School} />
					<Route exact path="/Demo" component={() => (
						this.state.loggedIn ? (
							<School />
						) : (
								<Redirect to={'/'} />
							)
					)
					}
					/>


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