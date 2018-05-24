import React from "react";
import ParentImageCmpnt from './ParentImageCmpnt';
import ParentCardInfo from './ParentCardInfo';
import ParentCardHeading from './ParentCardHeading';
import avatar from '../images/img_avatar3.png';
import "./ParentPortalCrdWrpr.css"

const moment = require('moment');

const ParentPortalCrdWrpr = props => {
  // make this array = to the incoming data from the database
  let PERSONS = [
    {
      id: '00',
      fName: 'Ivelise The Incradible',
      lName: 'Sola',
      family: 'Lorem ipsum dolor sit amet',
      image_heading: 'Carpool Pickup Candidate',
      image: avatar,
      email: '5whatever@you.com',
      phone: '323.555.2134',
      credentials: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore`,
      bio: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      cardHeading: 'Carpool Candidate',
      date: moment().format('MM-DD-YYYY   HH:mm:ss')
    },
    {
      id: '01',
      fName: 'Khalil The Github Master',
      lName: 'Last Name',
      family: 'Lorem ipsum dolor sit amet',
      image_heading: 'Carpool Pickup Candidate',
      image: avatar,
      email: '0whatever@you.com',
      phone: '323.000.2134',
      credentials: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore`,
      bio: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      cardHeading: 'Carpool Candidate',
      date: moment().format('MM-DD-YYYY  HH:mm:ss')
    },
    {
      id: '02',
      fName: 'Rick The Ruler',
      lName: 'Last Name',
      family: 'Lorem ipsum dolor sit amet',
      image_heading: 'Carpool Pickup Candidate',
      image: avatar,
      email: '1whatever@you.com',
      phone: '323.111.2134',
      credentials: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore`,
      bio: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      cardHeading: 'Carpool Candidate',
      date: moment().format('MM-DD-YYYY  HH:mm:ss')
    },
    {
      id: '03',
      fName: 'Pat The Purposeful Pragmatic',
      lName: 'Last Name',
      family: 'Lorem ipsum dolor sit amet',
      image_heading: 'Carpool Pickup Candidate',
      image: avatar,
      email: '2whatever@you.com',
      phone: '323.222.2134',
      credentials: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore`,
      bio: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      cardHeading: 'Carpool Candidate',
      date: moment().format('MM-DD-YYYY  HH:mm:ss')
    },
    {
      id: '04',
      fName: 'Trevor The Talented',
      lName: 'Last Name',
      family: 'Lorem ipsum dolor sit amet',
      image_heading: 'Carpool Pickup Candidate',
      image: avatar,
      email: '3whatever@you.com',
      phone: '323.333.2134',
      credentials: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore`,
      bio: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      cardHeading: 'Carpool Candidate',
      date: moment().format('MM-DD-YYYY  HH:mm:ss')
    },
    {
      id: '05',
      fName: 'Samuel',
      lName: 'Taylor',
      family: 'Lorem ipsum dolor sit amet',
      image_heading: 'Carpool Pickup Candidate',
      image: avatar,
      email: '4whatever@you.com',
      phone: '323.444.2134',
      credentials: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore`,
      bio: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      cardHeading: 'Carpool Candidate',
      date: moment().format('MM-DD-YYYY  HH:mm:ss')
    }
  ];
  return (
    < div className="" style={{ backgroundColor: 'lightblue', margin: 'auto' }
    }>

      {
        PERSONS.map(person =>

          <div class='container'>

            <div class='row'>
              <div style={{ display: 'none' }}>{person.cardHeading = "Parent / Guardian"}</div>   {/* this is hidden so cardHeading can be set to "Parent/Guardian" */}
              <div class='col-md-12'>
                <ParentCardHeading cardHeading={person.cardHeading} />      {/*heading is now a variable.  Can be switched to props if desired*/}
              </div>
              <div class='col-md-1'></div>
              <div class='col-md-5' >
                <ParentImageCmpnt name={person.fName} image_heading={person.image_heading} image={person.image} />
              </div>
              <div class='col-md-5'>
                <ParentCardInfo fName={person.fName} lName={person.lName} email={person.email} phone={person.phone} family={person.family} credentials={person.credentials} bio={person.bio} date={person.date} />
              </div>
              <div class='col-md-1'></div>
            </div>
          </div>








        )
      }
    </div >
  );
}
export default ParentPortalCrdWrpr;