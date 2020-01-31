import React, { Component } from "react";
import InstaService from '../services/instaService';
export default class Posts extends Component {
  InstaService=new InstaService();
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
