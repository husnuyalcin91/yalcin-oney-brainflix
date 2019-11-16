import React from 'react';
import './Button.scss';

const Button = (props) => {
    return (
        <button className={props.className} type="button">{props.text}</button>
    )
}

export default Button;