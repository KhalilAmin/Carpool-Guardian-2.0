import React, { Component } from 'react'


class CardGuardianInfo extends Component {
  render() {
    return (
      <div style={{ border: '3px solid' }}>
        <div class="w3-card-4" style={{ minWidth: '300px' }}>
          <header class="w3-container w3-blue">
            <h1><strong> {this.props.fName} </strong></h1>
            <h1><strong> {this.props.lName} </strong></h1>
          </header>

          <div class="w3-container" style={{ backgroundColor: 'white', fontSize: '30px' }}>
            <p>
              <strong>Family:</strong> {this.props.family}</p>
            <p>
              <strong>Email:</strong> {this.props.email}</p>
            <p>
              <strong>Phone:</strong> {this.props.phone}</p>
          </div>

          <footer class="w3-container w3-blue">
            <h4>CMS Schools</h4>
          </footer>
        </div>
      </div>
    )
  }
}

export default CardGuardianInfo;