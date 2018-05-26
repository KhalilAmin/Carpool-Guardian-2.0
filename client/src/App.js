import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import TeacherLogin from './pages/teacherLogin'
import guardianSignup from './pages/guardianSignup'
import teacherSignup from './pages/teacherSignup'
import TeacherSignUp from './components/PatsTempComponents/TeacherSignUp'
import Header from './components/Header'
// import Home from './components/Home'
import Home from './pages/Home'
// import Teacher from "./pages/Teacher"
// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Login from "./pages/Login"
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



class App extends Component {

	//TREVOR OLD
	// constructor() {
	// 	super()
	// 	this.state = {
	// 		loggedIn: false,
	// 		isTeacher: false,
	// 		user: null
	// 	}
	// 	this._logout = this._logout.bind(this)
	// 	// this._login = this._login.bind(this)
	// 	this._login = this._login
	// 	this._teacherlogin = this._teacherlogin.bind(this)
	// 	// this._teacherlogin = this._teacherlogin
	// }
	//TREVOR OLD

	//PAT NEW
	state = {
		loggedIn: false,
		isGuardian: false,
		isTeacher: false,
		user: null,
		teacherIsOpen: false,
		guardianIsOpen: false,
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

	// send = () => {
	// 	const socket = socketIOClient(this.state)

	// 	socket.emit('change color', 'red')
	// }

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
		// .then(res => {
		// 	// console.log(res);
		// 	// if (this.state.loggedIn)
		// 		<Redirect to={'/Temp'} />
		// })

		//this.getMessage();
	}

	getMessage() {
		this.socket.on("RECEIVE_MESSAGE", function(data) {
			console.log("IT")
		})
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

	// checkUserType = event => {
	// 	console.log("I WILL BE CHECKING IF THERE IS A GUARDIAN")
	// 	API.getGuardian({
	// 		email: email
	// 	})
	// 	.then(res => this.setState({ isGuardian: true }))
	// 	.then(res => {
	// 		console.log("I WILL BE CHECKING IF THERE IS A TEACHER")
	// 		API.getTeacher({
	// 			email: email
	// 		})
	// 		.then(res => this.setState({ isTeacher: true }))
	// 		.then(res => {
	// 			if (this.state.isTeacher || this.state.isGuardian) {

	// 			}
	// 		})
	// 		.catch(err => console.log(err));
	// 	})
	// 	.catch(err => console.log(err));	
	// }
	toggleTeacherModal = () => {
		this.setState({
			teacherIsOpen: !this.state.teacherIsOpen
		});
	}

	toggleGuardianModal = () => {
		this.setState({
			guardianIsOpen: !this.state.guardianIsOpen
		});
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


	

	// _login = logininfo => {

	// 	console.log("LOGININFO", logininfo);

	// 	const email = logininfo.email;
	// 	const password = logininfo.password;

	// 	axios
	// 		.post('/auth/login', {
	// 			email,
	// 			password
	// 		})
	// 		.then(response => {
	// 			console.log(response)
	// 			if (response.status === 200) {
	// 				// update the state
	// 				this.setState({
	// 					loggedIn: true,
	// 					user: response.data.user,
	// 					email: email,
	// 					password: password
	// 				})
	// 				// window.location = '/Temp';

	// 			}
	// 		})
	// 		.then(response => {
	// 			//Check if this is a guardian

	// 			console.log("I WILL BE CHECKING IF THERE IS A GUARDIAN")
	// 			API.getGuardian({
	// 				email: email
	// 			})
	// 			.then(res => this.setState({ isGuardian: true }))
	// 			.catch(err => console.log(err));

	// 			//Check if this is a teacher
	// 			console.log("I WILL BE CHECKING IF THERE IS A TEACHER")
	// 			API.getTeacher({
	// 				email: email
	// 			})
	// 			.then(res => this.setState({ isTeacher: true }))
	// 			.catch(err => console.log(err));
	// 		})
	// }

	// _teacherlogin = logininfo => {

	// 	const email = logininfo.email;
	// 	const password = logininfo.password;

	// 	axios
	// 		.post('/auth/login', {
	// 			email,
	// 			password
	// 		})
	// 		.then(response => {
	// 			console.log("Teacher Log in");
	// 			console.log(response);
	// 			if (response.status === 200) {
	// 				// update the state
	// 				this.setState({
	// 					loggedIn: true,
	// 					isTeacher: true,
	// 					user: response.data.user
	// 				})


	// 				// window.location = '/Temp';

	// 			}
	// 		})
	// }




	render() {

		// const socket = socketIOClient(this.state.endpoint)

		// socket.on('change color', (color) => {
		// 	document.body.style.backgroundColor = color
		// })


		return (
			<div className="App">

				{/* <div style={{ textAlign: "center" }}>
					<button onClick={() => this.send()}>Change Color</button>
				</div> */}


				<h1>Carpool Guardian 2.0</h1>
				<Header user={this.state.user} />
				{/* LINKS to our different 'pages' */}
				{/* <DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} /> */}
				<Nav _logout={this._logout} loggedIn={this.state.loggedIn} />
				{/* <Temp /> */}
				{/*  ROUTES */}
				{/* <Route exact path="/" component={Home} /> */}

				<Switch>
					<Route exact path="/" render={() => (
 						this.state.loggedIn ? (
 							this.state.isTeacher ? (
 								<div>
 									{/* <Redirect to={'/TeacherPortal'} /> */}
									<TeacherPortal
									userData = {this.state.userData}
									/>
 								</div>
 							) : (
 									this.state.isGuardian ? (
 										<div> 
 											{/* <Redirect to={'/GuardianPortal'} /> */}
											 <GuardianPortal
											 userData = {this.state.userData}/>
 										</div>
 									) : (
 											<Redirect to={'/'} />
 										)
 								)
 
 						) : (
 								<Redirect to={'/'} />
 
 							)
 						)
 						}
 						/>
					<Route exact path="/login" render={() => <Login _login={this._login} />} />
					<Route exact path="/teacherlogin" render={() => <TeacherLogin _teacherlogin={this._teacherlogin} />} />
					<Route exact path="/teacherSignup" component={teacherSignup} />
					<Route exact path="/guardianSignup" component={guardianSignup} />
					<Route exact path="/School" component={School} />
					<Route exact path="/Demo" component={() => (
						this.state.loggedIn ? (
							<Demo />
						) : (
								<Redirect to={'/'} />
							)
					)
					}
					/>
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
				<div className="App">
					<button onClick={this.toggleTeacherModal}>
						SignUp as Teacher

						</button>

					<Modal show={this.state.teacherIsOpen}
						onClose={this.toggleTeacherModal}>
						<AddTeacherCard />
					</Modal>
				</div>
				<div className="App">
					<button onClick={this.toggleGuardianModal}>
						SignUp as Parent
						</button>

					<Modal show={this.state.guardianIsOpen}
						onClose={this.toggleGuardianModal}>
						<AddGuardCard />
					</Modal>
				</div>

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