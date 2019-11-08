import React from 'react';
import './Comments.scss'

class Comments extends React.Component {
    render () {
    return(
            <div>
                <img alt={''} />
                <div>
                    <div>
                        {/* <p>{this.props.mainHeroVideo.comments[0]}</p> */}
                       
                        {/* <p>{this.props.mainVideo.comments.date}</p> */}
                    </div>
                    {/* <p>{this.props.mainVideo.comments.comment}</p> */}
                </div>
            </div>
        )
    } 
}

export default Comments;