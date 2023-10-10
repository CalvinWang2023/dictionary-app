import ResultSection from '../resultSection/ResultSection';

const ResultSections = ({ data, darkTheme }) => {
    const resultSections = data[0].meanings.map((meaning, index) => {
        return (
            <ResultSection key={ index } meaning = { meaning } darkTheme={ darkTheme } />
        );
    });

    return (
        <div className="meaning-sections">
            { resultSections }
        </div>
    )
}

export default ResultSections