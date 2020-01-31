import React, { Component } from "react";
import User from './User';
export default class Post extends Component {
    render() {
        return (
          <div className="post">
          <User src='https://jooinn.com/images/man-18.jpg'
           name='King'
           alt='figma'
           min />
            <img src={this.props.src} alt={this.props.alt}></img>
            <div className="post__name">
              some account
            </div>
            <div className='post__descr'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque est et sodales rutrum. Morbi tempus tortor a dictum consequat. Pellentesque ultrices magna nec urna sollicitudin vulputate. Etiam quis sodales sem. Duis ultricies tincidunt erat, vitae dictum urna rutrum a. Morbi sit amet quam sed purus tristique condimentum eu vel elit.
            </div>
          </div>
        );
    }
}
