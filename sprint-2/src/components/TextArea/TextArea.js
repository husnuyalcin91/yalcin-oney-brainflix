import React from 'react';
import './TextArea.scss';

const TextArea = () => {
    return (
        //removed value='' for now to get rid of a failed prop type error
        <textarea type="text" placeholder="Write comment here" name="name"></textarea>
    )
}

export default TextArea;