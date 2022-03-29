import React from 'react';
import './App.css';
import SearchBar from './components/searchbar/SearchBar';
import RedditReturn from './components/reddit/RedditReturn';

function App() {
	const greeting = 'Reddit Clone';

	return (
		<div className="App">
			<header className="App-header">
				<h1>{greeting}</h1>
				<div>
					<SearchBar />
					<RedditReturn />
				</div>
			</header>
		</div>
	);
}

export default App;
