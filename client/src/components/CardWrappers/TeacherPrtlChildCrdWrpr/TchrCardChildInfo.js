import React, { Component } from 'react'


class TchrCardChildInfo extends Component {
  render() {
    return (
      <div style={{ border: '5px solid', maxWidth: '550px' }}>
        <div className="w3-card-4" >
          <header className="w3-container w3-blue">
            <h1><strong> {this.props.fName} </strong></h1>
            <h1><strong> {this.props.lName} </strong></h1>
          </header>

          <div className="w3-container" style={{ backgroundColor: 'white', fontSize: '18px' }}>
            <div id='cardInfo' style={{ marginTop: '10%', marginBottom: '10%' }}>
              <p>
                <strong>Family:</strong> {this.props.family}</p>
              <p>
                <strong>Guardian:</strong> {this.props.guardian}</p>
              <p>
                <strong>Grade:</strong> {this.props.grade}</p>
              <p>
                <strong>Email:</strong> {this.props.email}</p>
              <p>
                <strong>Phone:</strong> {this.props.phone}</p>
              <p>
                <strong>Date:</strong> {this.props.date}</p>
            </div>
          </div>

          <footer className="w3-container w3-blue">
            <h4>CMS Schools</h4>
          </footer>
        </div>
      </div >
    )
  }
}

export default TchrCardChildInfo;