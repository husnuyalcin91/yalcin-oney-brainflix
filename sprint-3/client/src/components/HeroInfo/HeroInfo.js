import React from 'react';
import Moment from 'react-moment';
import './HeroInfo.scss';

const HeroInfo = (props) => {
    return (
        <div className='hero-info'>
            <h1 className='hero-info__title'>{props.mainHeroVideo.title}</h1>
            <h4 className='hero-info__channel'>{props.mainHeroVideo.channel} <Moment format='MM/DD/YYYY'>{props.mainHeroVideo.timestamp}</Moment></h4>
            <p className='hero-info__description'>{props.mainHeroVideo.description}</p>
        </div>
    )
}

export default HeroInfo;