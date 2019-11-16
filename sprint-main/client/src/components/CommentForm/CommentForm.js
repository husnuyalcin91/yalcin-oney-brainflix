import React from 'react';
import './CommentForm.scss';
import UserImage from '../UserImage/UserImage';
import InputBar from '../InputBar/InputBar';
import Button from '../Button/Button';
import sampleImage from '../../assets/images/Mohan-muruge.jpg';

const CommentForm = () => {
    return (
        <div className='form'>
            <UserImage className='form__image' imgSrc={sampleImage} altTxt="user" />
            <div className="form__bar-button-container">
                <InputBar className="form__bar" placeholder="Write comment here" />
                <Button className='form__button' text='COMMENT' />
            </div>
        </div>
    )
}

export default CommentForm;