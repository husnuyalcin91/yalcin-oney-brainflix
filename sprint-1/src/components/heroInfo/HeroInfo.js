import React from 'react';
import './HeroInfo.scss';

const HeroInfo = (props) => {
    return (
        <>
            <h1>{props.mainVideo.title}</h1>
            <h4>{props.mainVideo.title} {props.mainVideo.timestamp}</h4>
            <p>{props.mainVideo.description}</p>
        </>
    )
}

export default HeroInfo;