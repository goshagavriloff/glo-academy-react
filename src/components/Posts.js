import React, { Component } from "react";
import instaService from '../services/instaService';
export default class Posts extends Component {
  //https://stackoverflow.com/questions/52237855/support-for-the-experimental-syntax-classproperties-isnt-currently-enabled

  InstaService =new instaService();
  state={
    posts:[],
    error:false
  }

    componentDidMount() {
      this.updatePosts();
    }


    updatePosts(){
      this.InstaService.getCollection()
      .then(this.onPostsLoaded)
      .catch(this.onError);
    }

    onPostsLoaded=(posts)=>{
      this.setState({
        posts,
        error:false
      })
    }
    onError=(err)=>{
      this.setState({
        error:true
      })
    }

    render() {
        return (
          <div className="left">

          </div>
        );
    }
}
