import React, { Component } from "react";
import ErrorMessage from './Error';
import instaService from '../services/instaService';
export default class Pallete extends Component{
    InstaService =new instaService();
    state={
      error:false,
      photos:[]
    }

    componentDidMount(){
      this.updatePhotos();
    }

    updatePhotos(){
      this.InstaService.getAllPhotos()
      .then(this.onPhotosLoaded)
      .catch(this.onError)
    }

    onError=()=>{
      this.setState({
        error:true
      })
    }

    onPhotosLoaded=(photos)=>{
      this.setState({
        error:false,
        photos
      })
    }
    renderItems(arr){
      return arr.map(item=>{
        return (
          <img src={item.src} alt={item.alt}></img>
        )
      });
    }



    render () {
      const {error,photos}=this.state;
      if (error) {
        return <ErrorMessage />;
      }
      const items=this.renderItems(photos);
      return (
        <div className='palette'>
          {items}
        </div>
      );
    }
}
