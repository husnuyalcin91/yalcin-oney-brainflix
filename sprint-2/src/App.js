//don`t forget to remove the console logs before the final push
//set up the catch after axios get - then
//check Friday`s morning challenge to place the api in a separate file

import React from 'react';
import axios from 'axios';
import './App.scss';

//component imports
import Header from './components/Header/Header';
// import Button from './components/Button/Button';
// import UserImage from './components/UserImage/UserImage';
import Comments from './components/Comments/Comments';
import Aside from './components/Aside/Aside';
import HeroInfo from './components/HeroInfo/HeroInfo';
import HeroImage from './components/HeroImage/HeroImage'
// import InputBar from './components/InputBar/InputBar';
import CommentForm from './components/CommentForm/CommentForm';

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
          <div className='app__container-aside-incl'>
            <div className='app__container-without-aside'>
              <section>
                <HeroInfo mainHeroVideo={this.state.mainHeroVideo}/>
              </section>

              <div>
                <h4 className='app__comment-no'>3 Comments</h4>
                <div>
                  <CommentForm />
                </div>

                <section>
                  <Comments mainHeroComments={this.state.mainHeroComments}/>
                </section>
              </div>
            </div>
            <div>
              <h5 className='app__aside-title'>NEXT VIDEO</h5>
              <Aside sideBarVideos={this.state.sideBarVideos} mainHeroVideo={this.state.mainHeroVideo}/>
            </div>
          </div>
      </>
    )
  }
}

export default App;