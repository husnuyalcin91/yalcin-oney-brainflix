import React from 'react';
import { mainVideo } from '../../data/videos/mainVideo';
import './Comments.scss'

class Comments extends React.Component {
    state = {
        mainVideo: mainVideo
    }

    render () {
    return(
            <div>
                <img src={this.props.mainVideo.comments.image.src} alt={this.props.mainVideo.comments.image.alt} />
                <div>
                    <div>
                        <p>{this.props.mainVideo.comments.name}</p>
                        <p>{this.props.mainVideo.comments.date}</p>
                    </div>
                    <p>{this.props.mainVideo.comments.comment}</p>
                </div>
            </div>
        )
    } 
}

export default Comments;