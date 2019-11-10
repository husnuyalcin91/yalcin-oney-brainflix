import React from 'react';
import Image from '../../assets/images/Mohan-muruge.jpg';
import './Comments.scss'

class Comments extends React.Component {
    render () {
    return (
        <div mainHeroComments={this.props.mainHeroComments}>
            {this.props.mainHeroComments.map(item => {
                return <div> 
                    <img className={'user-image'} src={Image} alt={'commentator'} />
                    <div>
                        <div>
                            <p>{item.name}</p>
                            <p>{item.timestamp}</p>
                        </div>
                        <p>{item.comment}</p>
                    </div>
                </div>
            })}                                           
        </div>
        )
    } 
}

export default Comments;