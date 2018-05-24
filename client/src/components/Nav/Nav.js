import React from "react";
import { Redirect, Route, Link } from 'react-router-dom'
import "./nav.css";
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
						<Link to="/TeacherPortal" className="nav-link">
							Teacher Portal
						</Link>
					</li>
					<li>
						<Link to="#" className="nav-link" onClick={props._logout}>
							Logout
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/Demo" className="nav-link">
							Demo
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/Temp" className="nav-link">
							Temp
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/School" className="nav-link">
							School
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
						<button>
							Login
							</button>
						</Link>
					</li>
					{/* <li className="nav-item">
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
					</li> */}
				</ul>
			</nav>
		)
	}
}





export default Nav;
