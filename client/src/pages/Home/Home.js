import React, { Component } from 'react'
// TODO - add proptypes

class Home extends Component {

	render() {
		if (this.props.user) {
			return (
				<div className="Home">
					<p>Current User:</p>
					<code>
						{JSON.stringify(this.props)}
					</code>
				</div>
			)
		} else {
			return (
				<div className="Home">
					<p>Current User:</p>
					<code>
						{JSON.stringify(this.props)}
					</code>
				</div>
			)
		}
	}
}
export default Home