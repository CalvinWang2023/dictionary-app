import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import ResultHeader from './components/resultHeader/ResultHeader';
import ResultSections from './components/resultSections/ResultSections';
import ResultFooter from './components/resultFooter/ResultFooter';
import Error from './components/error/Error';

import './App.css';
import { useEffect, useState } from 'react';

function App() {
	const [font, setFont] = useState('0');
	const [darkTheme, setDarkTheme] = useState(false);
	const [data, setData] = useState();
	const [result, setResult] = useState(null);

	const fontSwitch = () => {
		switch(font) {
			case '0':
				document.body.style.fontFamily = 'Inconsolata';
				break;
			case '1':
				document.body.style.fontFamily = 'Inter';
				break;
			case '2':
				document.body.style.fontFamily = 'Lora';
				break;
			default:
				console.log('no such font available');
		}
	};

	const themeSwitch = () => {
		if (darkTheme) {
			document.body.style.backgroundColor = 'black';
		} else {
			document.body.style.backgroundColor = 'white';
		}
	};

	useEffect(() => {
		fontSwitch();
		themeSwitch();
	}, [font, darkTheme]);

	return (
		<div className='App'>
			<Header setFont={ setFont } darkTheme={ darkTheme } setDarkTheme={ setDarkTheme } />
			<SearchBar font={ font } setData={ setData } darkTheme={ darkTheme } setResult={ setResult } />
			{ 
				result ? (
					<div className="result-content">
						<ResultHeader data={ data } darkTheme={ darkTheme } />
						<ResultSections data={ data } darkTheme={ darkTheme } />
						<ResultFooter data={ data } darkTheme={ darkTheme } />
					</div>
				)  : (
					<Error data={ data } result={ result } darkTheme={ darkTheme } /> 
				)
			}
		</div>
	);
}

export default App;
