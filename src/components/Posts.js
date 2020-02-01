import React, { Component } from "react";
import User from './User';
import instaService from '../services/instaService';
export default class Posts extends Component {
  //https://stackoverflow.com/questions/52237855/support-for-the-experimental-syntax-classproperties-isnt-currently-enabled
//https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined?page=1&tab=votes#tab-top

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
      });
      console.log(this.state);
    }
    onError=(err)=>{
      this.setState({
        error:true
      })
    }
    renderItems(arr) {
      return arr.map(item=>{
        const {name,altname,photo,src,alt,descr,id}=item;

        return (
          <div key={id} className="post">
            <User src={photo}
             name={name}
             alt={altname}
             min />
            <img src={src} alt={alt}></img>
            <div className="post__name">
              {name}
            </div>
            <div className='post__descr'>
            {descr}
              </div>
          </div>
        );
      });
    }
    render() {
      const {error,posts}=this.state;


      const items =this.renderItems(posts);

        return (
          <div className="left">
            {items}
          </div>
        );
    }
}
