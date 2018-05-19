import React, { Component } from 'react'

// const CardGuardianInfo = props => {

// const personArray = props.personArray;
// const list = personArray.map((person) =>
//  key={person.id } 
class CardGuardianInfo extends Component {
  render() {
    return (
      <div style={{ width: '45%', display: 'table-cell' }}>
        <div class="w3-card-4" style={{ width: '80%', position: 'relative' }}>
          <header class="w3-container w3-blue">
            <h1>Candidate: {this.props.name}</h1>
          </header>

          <div class="w3-container" style={{ backgroundColor: 'white' }}>
            <p>
              <strong>Family:</strong> {this.props.family}</p>
            <p>
              <strong>Phone:</strong> {this.props.phone}</p>
            <p>
              <strong>Email:</strong> {this.props.email}</p>
            <p>
              <strong>Credentials:</strong> {this.props.credentials}</p>
            <p>
              <strong>Bio:</strong> {this.props.bio}</p>
          </div>

          <footer class="w3-container w3-blue">
            <h5>CMS Schools</h5>
          </footer>
        </div>
      </div>
    )
  }
}







// );

// }

export default CardGuardianInfo;