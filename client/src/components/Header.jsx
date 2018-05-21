import React from 'react'
// TODO - add proptypes

const Header = props => {
	let Greeting
	if (props.user === null) {
		Greeting = <p>Hello guest</p>
	} else if (props.user.fName) {
		Greeting = (
			<p>
				Welcome back, <strong>{props.user.fName}</strong>
			</p>
		)
	} else if (props.user.email) {
		Greeting = (
			<p>
				Welcome back, <strong>{props.user.fName} </strong>
			</p>
		)
	}
	return (
		<div className="Header">
			{Greeting}
		</div>
	)
}

export default Header
