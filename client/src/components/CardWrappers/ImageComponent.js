import React, { Component } from 'react'
import { relative } from 'path';
// import avatar from './assets/images/img_avatar3.png'

class ImageComponent extends Component {

  render() {
    return (
      <div >
        <div className="w3-container">

          <div className="w3-card-4 w3-dark-grey" style={{ minWidth: '250px' }}>

            <div className="w3-container w3-center" >
              <h4 style={{ color: 'lightgrey' }}>{this.props.name}</h4>
              <img src={this.props.image} alt={"Avatar"} style={{ width: '100%', height: '100%' }} />
              <h6 style={{ color: 'lightgrey' }}>{this.props.image_heading}</h6>

              <div className='w3-section'>
                <button className="w3-button w3-green" style={{ width: '30%', marginRight: '5%' }} >Accept </button>
                <button className="w3-button w3-red" style={{ width: '30%' }} > Alert </button>
              </div>
            </div>

          </div>

        </div>
      </div >
    )
  }
}

export default ImageComponent
