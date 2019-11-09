import React from "react";
import InputBar from '../InputBar/InputBar';
import Button from '../Button/Button';
import UserImage from '../UserImage/UserImage';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
    render() {

        return ( <div className="header">
          <Link to={`/`}> <img className ="header__logo" src="./assets/logo/logo-brainflix.svg" alt="site logo" /> </Link>
          <InputBar />
          <div className="header__button-image-container">
            <Link to={`/upload`}> <Button text="UPLOAD" /> </Link>
            <UserImage className="header__user-image" imgSrc="./assets/Images/Mohan-muruge.jpg" altTxt="user" />
          </div>
        </div>
        )
    }
}

export default Header;