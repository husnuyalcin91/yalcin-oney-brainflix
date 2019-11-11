import React from "react";
import InputBar from '../InputBar/InputBar';
import Button from '../Button/Button';
import UserImage from '../UserImage/UserImage';
import uploadIcon from '../../assets/icons/SVG/Icon-upload.svg';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
    render() {

        return ( <div className="header">
          <Link to={`/`}> <img className ="header__logo" src="./assets/logo/logo-brainflix.svg" alt="site logo" /> </Link>
          <InputBar className='header__input-bar' placeholder={'Search'}/>
          <div className="header__button-image-container">
            <Link to={`/upload`}> <Button className="header__button" text="UPLOAD"><i className='header__icon' src={uploadIcon} /> </Button> </Link>
            <UserImage className='header__user-image' imgSrc="./assets/Images/Mohan-muruge.jpg" altTxt="user" />
          </div>
        </div>
        )
    }
}

export default Header;