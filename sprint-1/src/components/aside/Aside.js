import React from 'react';
import { sideVideo } from '../../data/videos/sideVideo';
import { mainVideo } from '../../data/videos/mainVideo';
import './Aside.scss';

class Aside extends React.Component {
    state = {
        mainVideo: mainVideo,
        sideVideo: sideVideo
    }

    render() {
        return (
            <ul>
                <li key={this.props.mainVideo.id} sideVideo={this.state.sideVideo} mainVideo={this.state.mainVideo}>
                    {this.props.sideVideo.filter( (item) => {
                        return item.id !== this.props.mainVideo
                    .map( (item) => {
                        return <>
                        <h4 key={item.id}>{item.title}</h4>
                        <h6 key={item.id}>{item.channel}</h6>
                        <img key={item.id} src={item.image.src} alt={item.image.alt} />
                        </>
                    })
                    })}
                </li>
            </ul>
        )
    }
}


export default Aside;