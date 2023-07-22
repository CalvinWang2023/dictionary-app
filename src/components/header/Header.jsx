import { useState } from 'react';
import './Header.css';

const Header = ({ setFont, darkTheme, setDarkTheme }) => {
	const [displayed, setDisplayed] = useState(false);
	const [fontName, setFontName] = useState('Inconsolata');

	const handleThemeChanged = () => {
		setDarkTheme(!darkTheme);
	};

	const toggleFontsList = () => {
		setDisplayed(!displayed);
	};

	const setFontdisplay = (value) => {
		setFont(value);

		switch(value) {
			case '0':
				setFontName('Inconsolata');
				break;
			case '1':
				setFontName('Inter');
				break;
			case '2':
				setFontName('Lora');
				break;
			default:
				console.log('no such font available');
		}
	};

	return (
		<header className="header">
			<div className="header-left">
				<svg className={ darkTheme ? 'dictsvg-dark-mode dict-icon' : 'dict-icon' } xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 34 38">
					<g fill="none" fillRule="evenodd" stroke="#838383" strokeLinecap="round" strokeWidth="1.5">
						<path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28"/>
						<path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8"/>
						<path d="M11 9h12"/>
					</g>
				</svg>
			</div>
			<div className="header-right">
				<div className="font-choices">
					<div className="font-init" onClick={ toggleFontsList }>
						<div className={ darkTheme ? 'fontname-dark-mode fontname' : 'fontname' }>
							<p>{ fontName }</p>
						</div>
						<div className="arrow-down">
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 14 8">
								<path fill="none" stroke="#A445ED" strokeWidth="1.5" d="m1 1 6 6 6-6"/>
							</svg>
						</div>
					</div>
					<div className={`${darkTheme ? 'fontlist-dark-mode' : '' } ${displayed ? "displayed custom-select" : "folded custom-select"}`}>
						<option value="0" className="font" onClick={ () => setFontdisplay('0') }>Inconsolata</option>
						<option value="1" className="font" onClick={ () => setFontdisplay('1') }>Inter</option>
						<option value="2" className="font" onClick={ () => setFontdisplay('2') }>Lora</option>
					</div>					
				</div>

				<span className='vl'></span>
				<div className="switch">
					<div className="switch-mode">
						<input 
							type="checkbox" 
							className="checkbox" 
							id="checkbox"
							onChange={ handleThemeChanged } />
						<label 
							htmlFor="checkbox" 
							className={darkTheme ? "checkbox-label checkbox-dark-mode" : "checkbox-label"} 
							id="checkbox-label" >
							<span className="ball"></span>
						</label>
					</div>
					<div className="mode-pic">
						<svg className={ darkTheme ? 'moonsvg-dark-mode moon-icon' : 'moon-icon' } xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
							<path fill="none" stroke="#838383" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/>
						</svg>
					</div>
				</div>
			</div>
		</header>
  	)
}

export default Header