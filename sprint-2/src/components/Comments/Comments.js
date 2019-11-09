//try with function component, but first try to link parent and this child properly

import React from 'react';
import './Comments.scss'

class Comments extends React.Component {
    render () {
    return(
            <div>
                <img alt={''} />
                <div>
                    <div>
                        {/* <p>{this.props.mainHeroVideo.comments[comment]}</p> */}
                       
                        {/* <p>{this.props.mainVideo.comments.date}</p> */}
                    </div>
                    {/* <p>{this.props.mainVideo.comments.comment}</p> */}
                </div>
            </div>
        )
    } 
}

export default Comments;