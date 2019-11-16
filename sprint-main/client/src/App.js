import React from 'react';
import axios from 'axios';
import './App.scss';

//component imports
import Header from './components/Header/Header';
import Comments from './components/Comments/Comments';
import Aside from './components/Aside/Aside';
import HeroInfo from './components/HeroInfo/HeroInfo';
import HeroImage from './components/HeroImage/HeroImage'
import CommentForm from './components/CommentForm/CommentForm';

//axios - variables
const apiKey = "87c30414-6f8a-44bb-88fd-32a37998cbdd";
const url = "https://project-2-api.herokuapp.com";

//const url = 'http://localhost:8080/';

class App extends React.Component {
  state = {
    sideBarVideos: [],
    mainHeroVideo: [],
    mainHeroComments: []
  }

//mount stage

//axios get - comments
componentDidMount() {
  axios.get(`${url}/videos?api_key=${apiKey}`)
  .then(result => {
    this.setState({
      sideBarVideos: result.data
    });
    console.log(result.data);
  })
  .catch (error => {
    console.log(error);
  })

  axios.get(`${url}/videos/1af0jruup5gu?api_key=${apiKey}`)
  .then(response => {
    this.setState({
      mainHeroVideo: response.data,
      mainHeroComments: response.data.comments
    });
    console.log(response.data);
  })
  .catch (error => {
    console.log(error);
  })
}

// update stage

// componentDidUpdate() {
//   axios.get(`${url}/videos?api_key={apiKey}`)
//   .then(res => {
//     console.log(res.data);
//    this.setState({
        
// })
// })    
// }

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