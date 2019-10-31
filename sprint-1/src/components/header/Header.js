import React from 'react';
import './Header.scss';

class Header extends React.Component {
    render() {
        return(
            <div>
                <img src="../../assets/Logo/logo-brainflix.svg" alt="website logo" />
                <input type="text" placeholder="Search" name="name" value=""></input>
                <div>
                    <button type="button">Upload</button>
                    <img src="../../assets/Images/Mohan-muruge.jpg" alt="user" />
                </div>
            </div>            
        );
    }
}


export default Header;