import React from 'react';
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

class App extends React.Component {
  state = {
    mainVideo: mainVideo,
    sideVideo: sideVideo
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
            <HeroImage mainVideo={this.state.mainVideo} />
        </div>
        
        <div>
          <section>
            <HeroInfo mainVideo={this.state.mainVideo} />
          </section>

          <div>
            <h4>3 Comments</h4>
            <div>
            <UserImage imgSrc="./assets/Images/Mohan-muruge.jpg" altTxt="user" />
              <TextArea />
              <Button text='COMMENT' />
            </div>

            <section>
              <Comments mainVideo={this.state.mainVideo}/>
            </section>
            
          </div>

            <h5>NEXT VIDEO</h5>

            <Aside mainVideo={this.state.mainVideo} sideVideo={this.state.sideVideo}/>
        </div>
      </>
    )
  }
}

export default App;