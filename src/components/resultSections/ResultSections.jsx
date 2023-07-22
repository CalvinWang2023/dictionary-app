import ResultSection from '../resultSection/ResultSection';

const ResultSections = ({ data, darkTheme }) => {
    const resultSections = data[0].meanings.map((meaning) => {
        return (
            <ResultSection meaning = { meaning } darkTheme={ darkTheme } />
        )
    });

    return (
        <div className="meaning-sections">
            { resultSections }
        </div>
    )
}

export default ResultSections