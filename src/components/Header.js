import React, { Component } from "react";
import {Link} from 'react-router-dom';
export default class Header extends Component {
  render (){
    return (
      <header>
          <div className='container h-flex'>
            <Link to='/' className='logo'>
                <img src='src/img/logo.svg' alt='logo'></img>

            </Link>
            <nav className='links'>
              <ul>
                <Link to='/' href='#' className='menu__links'>Лента</Link>
                <Link to='/profile/' href='#' className='menu__links'>Профиль</Link>
              </ul>
            </nav>
          </div>
      </header>

    );
  }
}
