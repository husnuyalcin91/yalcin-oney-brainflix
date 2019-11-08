import React from 'react';
import './Comments.scss'

class Comments extends React.Component {
    render () {
    return(
            <div>
                <img src={this.props.mainVideo.comments[3]} alt={this.props.mainVideo.comments[3]} />
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