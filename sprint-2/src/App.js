import React from 'react';
import axios from 'axios';
import './App.scss';
// import { BrowserRouter, Route, Link } from 'react-router-dom';

import Button from './components/Button/Button';
import UserImage from './components/UserImage/UserImage';
import InputBar from './components/InputBar/InputBar';
import TextArea from './components/TextArea/TextArea';
import { mainVideo } from './data/videos/mainVideo';
import { sideVideo } from './data/videos/sideVideo';
import Comments from './components/Comments/Comments';
import Aside from './components/Aside/Aside';
import HeroInfo from './components/HeroInfo/HeroInfo';
import HeroImage from './components/HeroImage/HeroImage'

//axios - variables
const apiKey = "87c30414-6f8a-44bb-88fd-32a37998cbdd";
const url = "https://project-2-api.herokuapp.com";

class App extends React.Component {
  state = {
    mainVideo: mainVideo,
    sideVideo: sideVideo,
    sideBarVideos: [],
    mainHeroVideo: []
  }

//axios - get comments
componentDidMount() {
  axios.get(`${url}/videos?api_key=${apiKey}`)
  .then(result => {
    this.setState({
      sideBarVideos: result.data
    });
      console.log(result.data);
  })

  axios.get(`${url}/videos/1af0jruup5gu?api_key=${apiKey}`)
  .then(response => {
    this.setState({
      mainHeroVideo: response.data
    });
    console.log(response.data);
  })
}

  render() {
    return (
      <>
        <div className="header">
          <img className ="header__logo" src="./assets/logo/logo-brainflix.svg" alt="site logo" />
          <InputBar />
          <div className="header__button-image-container">
            <Button text="UPLOAD" />
            <UserImage className="header__user-image" imgSrc="./assets/Images/Mohan-muruge.jpg" altTxt="user" />
          </div>
        </div>

        <div>
            <HeroImage mainHeroVideo={this.state.mainHeroVideo}/>
        </div>
        
        <div>
          <section>
            <HeroInfo mainHeroVideo={this.state.mainHeroVideo}/>
          </section>

          <div>
            <h4>3 Comments</h4>
            <div>
            <UserImage imgSrc="./assets/Images/Mohan-muruge.jpg" altTxt="user" />
              <TextArea />
              <Button text='COMMENT' />
            </div>

            <section>
              <Comments mainVideo={this.state.mainVideo} mainHeroVideo={this.state.mainHeroVideo}/>
            </section>
            
          </div>

            <h5>NEXT VIDEO</h5>

            <Aside sideBarVideos={this.state.sideBarVideos} mainHeroVideo={this.state.mainHeroVideo}/>
        </div>
      </>
    )
  }
}

export default App;