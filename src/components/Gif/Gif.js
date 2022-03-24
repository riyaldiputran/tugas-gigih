import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';

const Gif = ({title,url}) =>{
    return <div>
        <div>
            <label>{title}</label>
        </div>
        <img src={url}/>
    </div>
}

export default Gif;