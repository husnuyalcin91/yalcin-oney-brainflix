import React from 'react';
import './InputBar.scss';

const InputBar = (props) => {
    return (
        //removed value='' for now to get rid of a failed prop type error
        <input className={props.className} type={props.type} placeholder={props.placeholder} name={props.name} text={props.text}></input>
    )
}

export default InputBar;