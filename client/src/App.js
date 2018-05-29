import React, { Component } from 'react'
import axios from 'axios'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
<<<<<<< HEAD
=======
// import TeacherLogin from './pages/teacherLogin'
// import guardianSignup from './pages/guardianSignup'
// import teacherSignup from './pages/teacherSignup'
// import TeacherSignUp from './components/PatsTempComponents/TeacherSignUp'
>>>>>>> c90e9ff957f6595e82d6f400dd7e45c155a7079c
import Header from './components/Header'
import Demo from "./pages/Demo"
import GuardianPortal from "./pages/GuardianPortal"
import Temp from "./pages/Temp";
import Nav from "./components/Nav";
import School from "./pages/School";
import TeacherPortal from "./pages/TeacherPortal";
import API from "./utils/API";
import io from "socket.io-client";
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

			}
			else {
				this.setState({
					loggedIn: false,
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

<<<<<<< HEAD
=======




>>>>>>> c90e9ff957f6595e82d6f400dd7e45c155a7079c
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
				{/* <h1>Carpool Guardian 2.0</h1> */}
				{/* <Header user={this.state.user} /> */}
				<Nav _logout={this._logout} isTeacher={this.state.isTeacher} loggedIn={this.state.loggedIn} />
				<Header user={this.state.user} />

				<Switch>

					<Route exact path="/login" render={() => <Login _login={this._login} />} />

					<Route exact path="/" render={() => (
						this.state.loggedIn ? (
							this.state.isTeacher ? (
								<div>
<<<<<<< HEAD
									{/* <Redirect to={'/TeacherPortal'} /> */}
									<TeacherPortal
										userData={this.state.userData}
									/>
=======
									<TeacherPortal userData={this.state.userData} />
>>>>>>> c90e9ff957f6595e82d6f400dd7e45c155a7079c
								</div>
							) : (
									this.state.isGuardian ? (
										<div>
<<<<<<< HEAD
											{/* <Redirect to={'/GuardianPortal'} /> */}
											<GuardianPortal
												userData={this.state.userData} />
=======
											<GuardianPortal userData={this.state.userData} />
>>>>>>> c90e9ff957f6595e82d6f400dd7e45c155a7079c
										</div>
									) : (
											<Redirect to={'/'} />
										)
								)

<<<<<<< HEAD
						) : (
								<Redirect to={'/'} />

							)
					)
					}
					/>
					<Route exact path="/login" render={() => <Login _login={this._login} />} />
					<Route exact path="/School" component={() => (
						this.state.loggedIn ? (
							<School />
						) : (
=======
						)
							: (
>>>>>>> c90e9ff957f6595e82d6f400dd7e45c155a7079c
								<Redirect to={'/'} />
							)
					)
					}
					/>

					<Route exact path="/Demo" component={() => (
						this.state.loggedIn ? (
							<Demo />
						) : (
								<Redirect to={'/'} />
							)
					)
					}
					/>
<<<<<<< HEAD
					{/* <Route exact path="/Parent" component={() => (
=======


					/>
					<Route exact path="/School" component={() => (
>>>>>>> c90e9ff957f6595e82d6f400dd7e45c155a7079c
						this.state.loggedIn ? (
							<School />
						) : (
								<Redirect to={'/'} />
							)
					)
					}
<<<<<<< HEAD
					/> */}
=======
					/>

>>>>>>> c90e9ff957f6595e82d6f400dd7e45c155a7079c
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