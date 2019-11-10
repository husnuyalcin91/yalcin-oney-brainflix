import React from 'react';
import Header from '../../components/Header/Header';
import InputBar from '../../components/InputBar/InputBar';
import Button from '../../components/Button/Button';
import Image from '../../assets/images/Upload-video-preview.jpg';
import './UploadPage.scss';

class UploadPage extends React.Component {
    render() {
        
        return (
            <>
            <Header />
            <h1>Upload Video</h1>
            <form>
                <img src={Image} alt="placeholder"/>
                <div>
                    <label>TITLE OF YOUR VIDEO</label>
                    <InputBar placeholder={`Add a title to your video`} />
                </div>
                <div>
                    <label>ADD A VIDEO DESCRIPTION</label>
                    <InputBar placeholder={`Add a description of your video`} />
                </div>
                <div>
                <Button text='CANCEL'/>
                <Button className='header__button' text='PUBLISH' />
                </div>
            </form>
            </>
        )
    }
}

export default UploadPage;