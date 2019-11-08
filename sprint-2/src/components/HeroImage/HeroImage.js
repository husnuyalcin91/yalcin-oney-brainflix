import React from 'react';
import './HeroImage.scss'

class HeroImage extends React.Component {
    render () {
    return(
            <video controls poster={this.props.mainVideo.image[0]} alt={this.props.mainVideo.image[1]}>

            </video>
        )
    } 
}

export default HeroImage;