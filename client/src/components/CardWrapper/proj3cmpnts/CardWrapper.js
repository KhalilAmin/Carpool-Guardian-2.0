import React from "react";
import AuthReqProps from './AuthReq-props';
import CardGuardianInfo from './CardGuardianInfo';
import CardHeader from './CardHeader';
import avatar from './images/img_avatar3.png';
import "./CardWrapper.css"

const CardWrapper = props => {
  // make this array = to the incoming data from the database
  let PERSONS = [
    {
      id: '00',
      name: 'Ivelise Sola',
      family: 'Lorem ipsum dolor sit amet',
      image_heading: 'Carpool Pickup Candidate',
      image: avatar,
      email: '5whatever@you.com',
      phone: '323.555.2134',
      credentials: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore`,
      bio: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
    },
    {
      id: '01',
      name: 'Khalil The Github Master',
      family: 'Lorem ipsum dolor sit amet',
      image_heading: 'Carpool Pickup Candidate',
      image: avatar,
      email: '0whatever@you.com',
      phone: '323.000.2134',
      credentials: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore`,
      bio: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
    },
    {
      id: '02',
      name: 'Rick The Ruler',
      family: 'Lorem ipsum dolor sit amet',
      image_heading: 'Carpool Pickup Candidate',
      image: avatar,
      email: '1whatever@you.com',
      phone: '323.111.2134',
      credentials: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore`,
      bio: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
    },
    {
      id: '03',
      name: 'Pat The Purposeful Pragmatic',
      family: 'Lorem ipsum dolor sit amet',
      image_heading: 'Carpool Pickup Candidate',
      image: avatar,
      email: '2whatever@you.com',
      phone: '323.222.2134',
      credentials: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore`,
      bio: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
    },
    {
      id: '04',
      name: 'Trevor The Talented',
      family: 'Lorem ipsum dolor sit amet',
      image_heading: 'Carpool Pickup Candidate',
      image: avatar,
      email: '3whatever@you.com',
      phone: '323.333.2134',
      credentials: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore`,
      bio: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
    },
    {
      id: '05',
      name: 'Samuel Taylor',
      family: 'Lorem ipsum dolor sit amet',
      image_heading: 'Carpool Pickup Candidate',
      image: avatar,
      email: '4whatever@you.com',
      phone: '323.444.2134',
      credentials: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore`,
      bio: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
    }
  ];
  return (
    <div className="">

      {
        PERSONS.map(person =>
          <span>
            <CardHeader />
            {/* // for each name there must = model 'name' */}
            <AuthReqProps name={person.name} image_heading={person.image_heading} image={person.image} />
            <CardGuardianInfo name={person.name} email={person.email} phone={person.phone} family={person.family} credentials={person.credentials} bio={person.bio} />
          </span>

        )}
    </div>
  );
}
export default CardWrapper;