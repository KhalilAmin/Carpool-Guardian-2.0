import React from "react";
import TchrChildImageCmpnt from './TchrChildImageCmpnt';
import TchrCardChildInfo from './TchrCardChildInfo';
import TchrCardChildHeading from './TchrCardChildHeading';
import avatar from '../images/img_avatar3.png';
import "./TchrPrtlChildCrdWrpr.css"

const moment = require('moment');

const TchrPrtlChildCrdWrpr = props => {
  // make this array = to the incoming data from the database
  let PERSONS = [
    {
      id: '00',
      fName: 'Johnny Do-Good',
      lName: 'Sola',
      family: 'Lorem ipsum dolor sit amet',
      image_heading: 'Carpool Pickup Candidate',
      image: avatar,
      email: '5whatever@you.com',
      phone: '323.555.2134',
      guardian: `My Mom`,
      grade: '4th',
      cardHeading: 'Carpool Candidate',
      date: moment().format('MM-DD-YYYY   HH:mm:ss'),
      school: 'The Best CMS School Ever!'
    },
    {
      id: '01',
      fName: 'Mikey',
      lName: 'Moonhouse',
      family: 'Lorem ipsum dolor sit amet',
      image_heading: 'Carpool Pickup Candidate',
      image: avatar,
      email: '0whatever@you.com',
      phone: '323.000.2134',
      guardian: `My Mom`,
      grade: '4th',
      cardHeading: 'Carpool Candidate',
      date: moment().format('MM-DD-YYYY  HH:mm:ss'),
      school: 'The Best CMS School Ever!'
    },
    {
      id: '02',
      fName: 'Ronald',
      lName: 'Reigndriver',
      family: 'Lorem ipsum dolor sit amet',
      image_heading: 'Carpool Pickup Candidate',
      image: avatar,
      email: '1whatever@you.com',
      phone: '323.111.2134',
      guardian: `My Mom`,
      grade: '4th',
      cardHeading: 'Carpool Candidate',
      date: moment().format('MM-DD-YYYY  HH:mm:ss'),
      school: 'The Best CMS School Ever!'
    },
    {
      id: '03',
      fName: 'Joshua',
      lName: 'Jurgenson',
      family: 'Lorem ipsum dolor sit amet',
      image_heading: 'Carpool Pickup Candidate',
      image: avatar,
      email: '2whatever@you.com',
      phone: '323.222.2134',
      guardian: `My Mom`,
      grade: '4th',
      cardHeading: 'Carpool Candidate',
      date: moment().format('MM-DD-YYYY  HH:mm:ss'),
      school: 'The Best CMS School Ever!'
    },
    {
      id: '04',
      fName: 'Terence',
      lName: 'Turnware',
      family: 'Lorem ipsum dolor sit amet',
      image_heading: 'Carpool Pickup Candidate',
      image: avatar,
      email: '3whatever@you.com',
      phone: '323.333.2134',
      guardian: `My Mom`,
      grade: '4th',
      cardHeading: 'Carpool Candidate',
      date: moment().format('MM-DD-YYYY  HH:mm:ss'),
      school: 'The Best CMS School Ever!'
    },
    {
      id: '05',
      fName: 'Stanley',
      lName: 'Stephens',
      family: 'Lorem ipsum dolor sit amet',
      image_heading: 'Carpool Pickup Candidate',
      image: avatar,
      email: '4whatever@you.com',
      phone: '323.444.2134',
      guardian: `My Mom`,
      grade: '4th',
      cardHeading: 'Carpool Candidate',
      date: moment().format('MM-DD-YYYY  HH:mm:ss'),
      school: 'The Best CMS School Ever!'
    }
  ];
  return (
    < div className="" style={{ backgroundColor: 'lightblue', margin: 'auto' }
    }>

      {
        PERSONS.map(person =>

          <div class='container'>

            <div class='row'>
              <div style={{ display: 'none' }}>{person.cardHeading = "Child"}</div>   {/* this is hidden so cardHeading can be set to "Parent/Guardian" */}
              <div class='col-md-12'>
                <TchrCardChildHeading cardHeading={person.cardHeading} />      {/*heading is now a variable.  Can be switched to props if desired*/}
              </div>
              <div class='col-md-1'></div>
              <div class='col-md-5' >
                <TchrChildImageCmpnt name={person.fName} image_heading={person.image_heading} image={person.image} school={person.school} />
              </div>
              <div class='col-md-5'>
                <TchrCardChildInfo fName={person.fName} lName={person.lName} family={person.family} guardian={person.guardian} grade={person.grade} email={person.email} phone={person.phone} date={person.date} />
              </div>
              <div class='col-md-1'></div>
            </div>
          </div>

        )
      }
    </div >
  );
}
export default TchrPrtlChildCrdWrpr;