import React, { Component } from 'react'
import { relative } from 'path';
// import avatar from './assets/images/img_avatar3.png'

class ImageComponent extends Component {

  render() {
    return (
      <div style={{ border: '3px solid' }}>
        <div className="w3-container" style={{}}>

          <div className="w3-card-4 w3-dark-grey">

            <div className="w3-container w3-center">
              <h3>{this.props.image_heading}</h3>
              <img src={this.props.image} alt={"Avatar"} style={{ width: '85%', height: '85%' }} />
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

export default ImageComponent
