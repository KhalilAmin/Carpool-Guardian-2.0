import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

// import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import { Input, FormBtn} from "../../components/Form";

class Login extends Component {
	constructor() {
		super()
		this.state = {
			// username: '',
			email: '',
			password: '',
			redirectTo: null
		}
		
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log(this.state.email)
		// console.log(this.state.redirectTo)
		this.props._login(this.state.email, this.state.password)
		this.setState({
			redirectTo: '/Temp',
			loggedIn: true,
			
		})
		// .then (<Redirect to={"/Temp"} />)
		
	}

	render() {
		
		if (this.state.loggedIn) {
			return <Redirect to="/Temp" />
			console.log(this.state)
		} else {
			return (
				<div className="Login">
					<h1>Guardian Login</h1>
					<form>
						<label htmlFor="email">Email: </label>
						<input
							type="text"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
						<label htmlFor="password">Password: </label>
						<input
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
						<button onClick={this.handleSubmit}>Login</button>
					</form>

				</div>
			)
		}
	}
}
//   state = {
//     familyName: "",
//     name: ""
//   };


//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleAddFamily = event => {
//     event.preventDefault();
//     API.addFamily({
//       familyName: this.state.familyName
//     })
//   };




//     return (
//       <Container fluid>
//         <h1>Hello World</h1>
//       </Container>
//     )
//   }
// };
//   render() 

//     return (
//       <Container fluid>
//         <h1>Hello World</h1>
//         <div className="panel panel-default">
//           <div className="panel-body">
//             <Row>
//               <Col size="md-6">
//                 <div className="form-group">
//                   <Input className="form-control"
//                     value={this.state.familyName}
//                     onChange={this.handleInputChange}
//                     name="fName"
//                     placeholder="Enter Family Name"
//                   />
//                 </div>
//               </Col>
//             </Row>
//             <Row>
//               <Col size="md-6">
//                 <FormBtn
//                   onClick={this.handleAddFamily}
//                   >
//                     Input Family
//                 </FormBtn>
//               </Col>
//             </Row>
//           </div>
//         </div>
//       </Container>
//     )
//   }
// };

export default Login
