import React from 'react';
import './HeroImage.scss'

class HeroImage extends React.Component {
    render () {
    return(
        <div className='hero'>
            <video controls className='hero__image' poster={this.props.mainHeroVideo.image} alt={""}>

            </video>
        </div>
        )
    } 
}

export default HeroImage;