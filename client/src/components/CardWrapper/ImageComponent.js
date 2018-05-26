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
              <img src={"data:image/png;base64," + this.props.img} alt={this.props.fName} style={{ width: '85%', height: '85%' }} />
              <h5>{this.props.name}</h5>
            </div>

          </div>

        </div>
      </div >
    )
  }
}

export default ImageComponent
