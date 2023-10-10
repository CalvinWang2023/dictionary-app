import { useEffect, useState } from 'react'
import playButton from '../../assets/images/icon-play.svg'

import './ResultHeader.css';

const ResultHeader = ({ data, darkTheme }) => {
    const [audioSrc, setAudioSrc] = useState('');
    const [texts, setTexts] = useState([]);

    const getAudioSrc = () => {
        for (let i = 0; i < data[0].phonetics.length; i++) {
            if (data[0].phonetics[i].audio !== '') {
                setAudioSrc(data[0].phonetics[i].audio);
                return;
            }
        }
        setAudioSrc('');
    };

    const getTexts = () => {
        let texts = [];
        for (let i = 0; i < data[0].phonetics.length; i++) {
            if (data[0].phonetics[i].text !== null && data[0].phonetics[i].text !== '') {
                texts = [...texts, data[0].phonetics[i].text];
            }
        }
        setTexts(texts);
    };

    const playAudio = () => {
        if (audioSrc !== null && audioSrc !== '') {
            const audio = new Audio(audioSrc);

            audio.play();
        }
    };

    const phonetics = texts.map((text, index) => {
        if (text !== undefined) {
            return (
                <p key={index} className='phonetic'>{text}</p>
            );
        }
    })

    useEffect(() => {
        getAudioSrc(),
            getTexts()
    }, [data]);


    const dict = {
        word: data[0].word,
        audioSrc: audioSrc,
        texts: texts
    };
    return (
        <div className="dict-header">
            <div className="word-audio">
                <h1 className={darkTheme ? 'word-dark-mode word' : 'word'}>{ dict.word }</h1>
                <img src={ playButton } alt="play button" onClick={ playAudio } />
            </div>
            <div className="phonetics">
                { phonetics }
            </div>
        </div>
    )
}

export default ResultHeader