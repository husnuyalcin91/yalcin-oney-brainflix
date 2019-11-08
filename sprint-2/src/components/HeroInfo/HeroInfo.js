import React from 'react';
import './HeroInfo.scss';

const HeroInfo = (props) => {
    return (
        <>
            <h1>{props.mainHeroVideo.title}</h1>
            <h4>{props.mainHeroVideo.channel} {props.mainHeroVideo.timestamp}</h4>
            <p>{props.mainHeroVideo.description}</p>
        </>
    )
}

export default HeroInfo;