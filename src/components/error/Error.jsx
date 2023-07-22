import React from 'react';
import error from '../../assets/images/error.svg';
import './Error.css';

const Error = ({ result, data, darkTheme }) => {
    if (result === null) {
        return;
    }
    else if (result === false) {
        if (!data || data.length === 0) {
            return (
                <div className={ darkTheme ? "blank-dark-mode blank-error" : "blank-error" }>
                    <img src={ error } alt="word not found" />
                    <h3>Input Blank</h3>
                    <p>Sorry Pal, please input some alphabets so we can search it up for u!</p>
                </div>
            )
        } else {
            return (
                <div className={ darkTheme ? "search-dark-mode search-error" : "search-error" }>
                    <img src={ error } alt="word not found" />
                    <h3>{ data.title }</h3>
                    <p>{ data.message }</p>
                    <p>{ data.resolution }</p>
                </div>
            )   
        }
    }
}

export default Error