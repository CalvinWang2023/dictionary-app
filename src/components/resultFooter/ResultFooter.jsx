import React from 'react'
import newWindow from '../../assets/images/icon-new-window.svg';
import './ResultFooter.css';

const ResultFooter = ({ data, darkTheme }) => {
	const handleNewWindowClick = () => {
		window.open(data[0].sourceUrls[0], '_blank');
	};

    return (
		<div className="footer">
			<div className="src-title">
				<p>Source</p>
			</div>
			<div className={ darkTheme ? "url-dark-mode src-url" : "src-url" }>
				<a href={ data[0].sourceUrls[0] }>{ data[0].sourceUrls[0] }</a>
			</div>
			<div className="new-window">
				<img src={ newWindow } alt="new window" onClick={ handleNewWindowClick } />
			</div>
		</div>
    )
}

export default ResultFooter