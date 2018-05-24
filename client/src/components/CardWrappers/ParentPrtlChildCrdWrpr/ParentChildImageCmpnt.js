import React, { Component } from 'react'
import { relative } from 'path';

class ParentChildImageCmpnt extends Component {

  render() {
    return (
      <div >
        <div className="w3-container w3-dark-grey" style={{ maxWidth: '350px' }}>

          <div >

            <div className="w3-container w3-center" >
              <h4 style={{ color: 'lightgrey' }}>{this.props.name}</h4>
              <img src={this.props.image} alt={"Avatar"} style={{ width: '100%', height: '100%' }} />
              <h6 style={{ color: 'lightgrey' }}>{this.props.image_heading}</h6>

              <div className='w3-section'>
                <button className="w3-button w3-green" style={{ width: '35%', marginRight: '5%' }} >Done </button>
                <button className="w3-button w3-red" style={{ width: '35%' }} > Alert </button>
              </div>
            </div>

          </div>

        </div>
      </div >
    )
  }
}

export default ParentChildImageCmpnt
