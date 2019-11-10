//don`t forget to remove the console logs before the final push
//set up the catch after axios get - then
//check Friday`s morning challenge to place the api in a separate file

import React from 'react';
import axios from 'axios';
import './App.scss';

import Header from './components/Header/Header';
import Button from './components/Button/Button';
import UserImage from './components/UserImage/UserImage';
import TextArea from './components/TextArea/TextArea';
import Comments from './components/Comments/Comments';
import Aside from './components/Aside/Aside';
import HeroInfo from './components/HeroInfo/HeroInfo';
import HeroImage from './components/HeroImage/HeroImage'

//axios - variables
const apiKey = "87c30414-6f8a-44bb-88fd-32a37998cbdd";
const url = "https://project-2-api.herokuapp.com";

class App extends React.Component {
  state = {
   
    sideBarVideos: [],
    mainHeroVideo: [],
    mainHeroComments: []
  }

//axios get - comments
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
      mainHeroVideo: response.data,
      mainHeroComments: response.data.comments
    });
    console.log(response.data);
  })

  
}

  render() {
    return (
      <>
          <Header />
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
                <Comments mainHeroComments={this.state.mainHeroComments}/>
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