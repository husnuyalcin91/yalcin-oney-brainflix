import React from 'react';
import './UserImage.scss';

const UserImage = (props) => {
    return(
        <img src={props.imgSrc} alt={props.altTxt} className="user-image"/>
    )
}

export default UserImage;