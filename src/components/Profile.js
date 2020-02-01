import React, { Component } from "react";
import User from './User';
import Pallete from './Pallete';

const Profile=()=>{
  return (
    <div className='container profile'>
    <User src='https://jooinn.com/images/man-18.jpg'
     name='King'
     alt='figma' />
      <Pallete />
    </div>
  );
}
export default Profile;
