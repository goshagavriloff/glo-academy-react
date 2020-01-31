import React, { Component } from "react";
export default class Header extends Component {
  render (){
    return (
      <header>
          <div className='container h-flex'>
            <a href='#' className='logo'>
                <img src='src/img/logo.svg' alt='logo'></img>

            </a>
            <nav className='links'>
              <ul>
                <li href='#' className='menu__links'>Лента</li>
                <li href='#' className='menu__links'>Профиль</li>
              </ul>
            </nav>
          </div>
      </header>

    );
  }
}
