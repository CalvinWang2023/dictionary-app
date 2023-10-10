import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ font, setData, darkTheme, setResult }) => {
    const [word, setWord] = useState('');

    const wordData = async () => {
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, {cache: "no-cache"});
            const data = await response.json();
            setData(data);
    
            if (!response.ok) {
                setResult(false);
            } else {
                setResult(true);
            } 
        } catch (error) {
            console.log(error);
        }
    };

    const inputOnChangeHandler = (e) => {
        setWord(e.target.value);
    };

    const searchOnKeyDownHandler = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            searchUserHandler();
        }
    };

    const searchUserHandler = () => {
        if (word === '') {
            setResult(false);
            setData('');
        }
        wordData();
    };

    const inputFont = {
        fontFamily: font === '0' ? 
                        'Inconsolata' 
                        : font === '1' ? 
                        'Inter' : 'Lora'
    };

    return (
        <div className={ darkTheme ? 'container-dark-mode searchbar-container' : 'searchbar-container' }>
            <input 
                type="text"  
                className={ darkTheme ? 'searchbar-dark-mode searchbar' : 'searchbar' } 
                value={ word } 
                onChange={ inputOnChangeHandler } 
                onKeyDown={ searchOnKeyDownHandler }
                style={ inputFont } />
            <svg className='search-icon' onClick={ searchUserHandler } xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 18 18">
                <path fill="none" stroke="#A445ED" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"/>
            </svg>
        </div>
    )
}

export default SearchBar