import React from 'react';
import './App.scss';
import Button from './components/Button/Button';
import UserImage from './components/UserImage/UserImage'

class App extends React.Component {
  render() {
    return (
      <>
        <div>
          <img src="./assets/logo/logo-brainflix.svg" alt="site logo" />
          <input type="text" placeholder="Search" name="name" value=""></input>
          <div>
            <Button text="UPLOAD" />
            <UserImage imgSrc="./assets/Images/Mohan-muruge.jpg" altTxt="user" />
          </div>
        </div>

        <div>
          <video />
        </div>
        
        <div>
          <section>
            <h1>BMX Rampage: 2018 Highlights</h1>
            <h4>By Red Cow 12/18/2018</h4>
            {/* views and likes */}
            <p>On a gusty day in Southern Utah, a group of 25
            daring mountain bikers blew the doors off what is
            possible on two wheels, unleashing some of the
            biggest moments the sport has ever seen. While
            mother nature only allowed for one full run before
            the conditions made it impossible to ride, that was
            all that was needed for event veteran Kyle Strait,
            who won the event for the second time -- eight years
            after his first Red Cow Rampage title</p>
          </section>

          <div>
            <h4>3 Comments</h4>
            <div>
            <UserImage imgSrc="./assets/Images/Mohan-muruge.jpg" altTxt="user" />
              <textarea type="text" placeholder="Write comment here" name="name" value=""></textarea>
              <Button text='COMMENT' />
            </div>
            {/* comments come here */}
          </div>

          <aside>
            <h5>NEXT VIDEO</h5>
            <div>
              <img alt="whatever"></img>
              <div>
                <h4>Become A Travel Pro In One Easy Lesson for</h4>
                <h6>Scotty Cranmer</h6>
              </div>
            </div>
          </aside>
        </div>
      </>
    )
  }
    

}

export default App;