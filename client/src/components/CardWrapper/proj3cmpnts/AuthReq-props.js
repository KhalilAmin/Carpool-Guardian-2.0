import React, { Component } from 'react'
// import avatar from './assets/images/img_avatar3.png'

class AuthReqProps extends Component {

  render() {
    return (
      <div style={{ width: '35%', display: 'table-cell' }}>
        <div className="w3-container">

          <div className="w3-card-4 w3-dark-grey" style={{ maxWidth: '450px', margin: 'auto' }}>

            <div className="w3-container w3-center">
              <h3>{this.props.image_heading}</h3>
              <img src={this.props.image} alt={"Avatar"} style={{ width: '80%' }} />
              <h5>{this.props.name}</h5>

              <div className='w3-section'>
                <button className="w3-button w3-green" style={{ width: '30%', marginRight: '5%' }} >Accept </button>
                <button className="w3-button w3-red" style={{ width: '30%' }} > Decline </button>
              </div>
            </div>

          </div>

        </div>
      </div >
    )
  }
}

export default AuthReqProps
