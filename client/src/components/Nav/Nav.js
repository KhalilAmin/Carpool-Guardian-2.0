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
						<Link to="/TeacherPortal" className="nav-link">
							Teacher Portal
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
						<Link to="/schools" className="nav-link">
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
	} else {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/login" className="nav-link">
							Login
						</Link>
					</li>
					{/* <li className="nav-item">
						<Link to="/Demo" className="nav-link">
							Demo
						</Link>
					</li> */}
					<li className="nav-item">
						<Link to="/schools" className="nav-link">
							Schools
						</Link>
					</li>
					{/* <li className="nav-item">
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
