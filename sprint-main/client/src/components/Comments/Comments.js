import React from 'react';
import Image from '../../assets/images/Mohan-muruge.jpg';
import Moment from 'react-moment';
import './Comments.scss'

class Comments extends React.Component {
    render () {
    return (
        <div mainHeroComments={this.props.mainHeroComments}>
            {this.props.mainHeroComments.map(item => {
                return <div className='comment__container'> 
                    <img className='comment__user-image' src={Image} alt={'commentator'} />
                    <div className='comment__holder'>
                        <div className='comment__wrapper'>
                            <p>{item.name}</p>
                            <p className='comment__date'><Moment format='MM/DD/YYYY'>{item.timestamp}</Moment></p>
                        </div>
                        <p className='comment__comment'>{item.comment}</p>
                    </div>
                </div>
            })}                                           
        </div>
        )
    } 
}

export default Comments;