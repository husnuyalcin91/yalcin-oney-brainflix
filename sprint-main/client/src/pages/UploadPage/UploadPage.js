import React from 'react';
import Header from '../../components/Header/Header';
import InputBar from '../../components/InputBar/InputBar';
import Button from '../../components/Button/Button';
import Image from '../../assets/images/Upload-video-preview.jpg';
import './UploadPage.scss';

class UploadPage extends React.Component {
    render() {
        
        return (
            <div className='upload'>
                <Header />
                <h1 className='upload__title'>Upload Video</h1>
                <form className='upload__form'> 
                    <div className='upload__desk-wrapper'>
                        <div>
                            <p className='upload__image-desc'>VIDEO THUMBNAIL</p>
                            <img className='upload__image' src={Image} alt="placeholder"/>
                        </div>
                        <div className='upload__input-wrapper'>
                            <div className='upload__video-title-container'>
                                <p className='upload__video-title'>TITLE OF YOUR VIDEO</p>
                                <InputBar className='upload__input-video-title' placeholder={`Add a title to your video`} />
                            </div>
                            <div className='upload__video-desc-container'>
                                <p className='upload__video-desc'>ADD A VIDEO DESCRIPTION</p>
                                <InputBar className='upload__input-video-desc' placeholder={`Add a description of your video`} />
                            </div>
                        </div>
                    </div>
                    <div className='upload__button'>
                        <Button className='upload__publish-button' text='PUBLISH' />
                        <Button className='upload__cancel-button' text='CANCEL'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default UploadPage;