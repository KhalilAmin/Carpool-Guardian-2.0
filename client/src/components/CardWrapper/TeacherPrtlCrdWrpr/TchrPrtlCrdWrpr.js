import React, { Component } from 'react'
import ImageComponent from '../ImageComponent';
import TchrCardGuardianInfo from './TchrCardGuardianInfo';
import TchrCardHeading from './TchrCardHeading';
import avatar from '../images/img_avatar3.png';
import "./TchrPrtlCrdWrpr.css"

const moment = require('moment');

class TchrPrtlCrdWrpr extends Component {

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      < div className="" style={{ backgroundColor: 'lightblue', margin: 'auto' }
      }>

        {   <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <TchrCardHeading confidence={this.props.confidence} />      {/*heading is now a variable.  Can be switched to props if desired*/}
                </div>
              </div>
              <div className='row'>
                <div className='col-md-4'>
                  < ImageComponent name={this.props.fName} img={this.props.img} />
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-7'>
                  <TchrCardGuardianInfo fName={this.props.fName} lName={this.props.lName} email={this.props.email} phone={this.props.phone} family={this.props.family} confidence={this.props.confidence}/>
                </div>
              </div>
            </div>
        }
      </div >
    );
  }
}

export default TchrPrtlCrdWrpr;