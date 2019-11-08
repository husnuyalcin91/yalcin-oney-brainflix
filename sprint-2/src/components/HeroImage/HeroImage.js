import React from 'react';
import './HeroImage.scss'

class HeroImage extends React.Component {
    render () {
    return(
            <video controls className='hero-image' poster={this.props.mainHeroVideo.image} alt={""}>

            </video>
        )
    } 
}

export default HeroImage;