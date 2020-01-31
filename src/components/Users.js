import React, { Component } from "react";
import User from './User';
export default class Users extends Component {
    render() {
        return (
          <div className="right">
          <User
          src='https://jooinn.com/images/man-18.jpg'
          alt='man'
          name='King'
          />
            <div className='users__block'>
              <User
              src='https://jooinn.com/images/man-19.jpg'
              alt='man'
              name='Scott'
              min
              />
              <User
              src='https://jooinn.com/images/man-19.jpg'
              alt='man'
              name='Scott'
              min
              />
              <User
              src='https://jooinn.com/images/man-19.jpg'
              alt='man'
              name='Scott'
              min
              />
              <User
              src='https://jooinn.com/images/man-19.jpg'
              alt='man'
              name='Scott'
              min
              />
              <User
              src='https://jooinn.com/images/man-19.jpg'
              alt='man'
              name='Scott'
              min
              />
            </div>
          </div>
        );
    }
}
