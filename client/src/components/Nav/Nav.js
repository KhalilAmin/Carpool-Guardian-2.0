import React from "react";
import { Redirect, Route, Link } from 'react-router-dom'
// const Nav = () => (
//   <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//     <a className="navbar-brand" href="/">
//       React Reading List
//     </a>
//   </nav>
// );


const Nav = props => {
	if (props.loggedIn) {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/Temp" className="nav-link">
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
						<Link to="/login" className="nav-link">
							Guardian Login
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/teacherlogin" className="nav-link">
							Teacher Login
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/teacherSignup" className="nav-link">
							Teacher Signup
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/guardianSignup" className="nav-link">
							Guardian Signup
						</Link>
					</li>
				</ul>
			</nav>
		)
	}
}





export default Nav;
