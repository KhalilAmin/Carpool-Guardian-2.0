import axios from 'axios'
import { Redirect } from 'react-router-dom'
import TeacherPortal from "../TeacherPortal";
import GuardianPortal from "../GuardianPortal";
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

		// TODO - add proptypes

		class Home extends Component {
			state = {
				user: []
			};
			render() {
				return (
					<div>
						{this.props.isTeacher > 0 ? (
							<TeacherPortal user={this.state.user} />
						) : (
								<GuardianPortal user={this.state.user} />
							)}
					</div>
				);

				// 	console.log(this.props.user);
				// 	console.log(this.props.isTeacher);
				// 	console.log(this.state);
				// return (<h1>Workin</h1>);
				// if (props.user) 
				// 	return (
				// 		<div className="Home">
				// 			<p>Current User:</p>
				// 			<code>
				// 				{JSON.stringify(props)}
				// 			</code>
				// 		</div>
				// 	)
				// } else {
				// 	return (
				// 		<div className="Home">
				// 			<p>Current User:</p>
				// 			<code>
				// 				{JSON.stringify(props)}
				// 			</code>
				// 		</div>
				// 	)
				// }

			}
		}
	}
}
export default Home