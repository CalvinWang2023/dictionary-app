import './ResultSection.css';

const ResultSection = ({ meaning, darkTheme }) => {
    const dict = {
        speech: meaning.partOfSpeech,
        synonyms: meaning.synonyms,
        antonyms: meaning.antonyms,
        definitions: meaning.definitions
    };

    const meanings = dict.definitions.map((defi, index) => {
        return (
            <li key={index}>
                <div className="definition-general">
                    <p className={ darkTheme ? 'definition-dark-mode definition' : 'definition' }>{ defi.definition }</p>
                    <p className='example'>{ defi.example }</p>
                </div>                
            </li>
        )
    });

    const synonymContent = (synonyms) => {
        if (synonyms.length > 0) {
            return (
                <div className="synonym">
                    <p className="synonym-title">Synonyms</p>
                    <p className="synonym-word">{ synonyms[0] }</p>
                </div>
            )
        } 
    };

    const antonymContent = (antonyms) => {
        if (antonyms.length > 0) {
            return (
                <div className="antonym">
                    <p className="antonym-title">Antonyms</p>
                    <p className="antonym-word">{ antonyms[0] }</p>
                </div>
            )
        }
    };

    return (
        <section className="meaning-section">
            <div className="speech-title">
                <p className={darkTheme ? 'speech-dark-mode speech' : 'speech'}>{dict.speech}</p>
                <div className="hl"></div>
            </div>
            <div className="meaning">
                <div className="meaning-title">
                    <p>Meaning</p>
                </div>
                <div className="meaning-content">
                    <ul> { meanings } </ul>
                </div>
            </div>
            <div className="nyms">        
                { synonymContent(dict.synonyms) } 
                { antonymContent(dict.antonyms) }
            </div>
        </section>
    )
}

export default ResultSection