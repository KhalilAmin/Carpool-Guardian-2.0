import React from "react";
import { Redirect, Route, Link } from 'react-router-dom'
import "./nav.css";
var kidsMom = require('./kidsMom.jpg')


const Nav = props => {
	if (props.isTeacher && props.loggedIn) {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/Demo" className="nav-link">
							Demo
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/Temp" className="nav-link">
							Admin Portal
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/School" className="nav-link">
							Schools
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
	} else if (props.loggedIn) {
		return (
			<nav className="navbar">
				<ul className="nav">
				<li>
						<Link to="#" className="nav-link" onClick={props._logout}>
							<h2>Logout</h2>
						</Link>
					</li>
				</ul>
			</nav>
			
		)
	} else {
		return (
			// <h1>Derp Derp MFer's </h1>
			
			<img src={ kidsMom } />
		)
	}
}






export default Nav;
