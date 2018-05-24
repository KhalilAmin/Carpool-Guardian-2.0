import React, { Component } from 'react'
import { relative } from 'path';
// import avatar from './assets/images/img_avatar3.png'

class TchrChildImageCmpnt extends Component {

  render() {
    return (
      <div >
        <div className="w3-container w3-dark-grey" style={{ maxWidth: '350px' }}>

          <div >

            <div className="w3-container w3-center" >
              <h4 style={{ color: 'lightgrey' }}>{this.props.name}</h4>
              <img src={this.props.image} alt={"Avatar"} style={{ width: '100%', height: '100%' }} />
              <h6 style={{ color: 'lightgrey' }}>{this.props.school}</h6>
            </div>

          </div>

        </div>
      </div >
    )
  }
}

export default TchrChildImageCmpnt
