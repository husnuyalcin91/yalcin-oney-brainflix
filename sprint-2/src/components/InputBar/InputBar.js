import React from 'react';
import './InputBar.scss';

const InputBar = () => {
    return (
        //removed value='' for now to get rid of a failed prop type error
        <input className="header__input-bar" type="text" placeholder="Search" name="name"></input>
    )
}

export default InputBar;