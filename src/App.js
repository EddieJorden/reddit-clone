import './App.css';
import SearchBar from './components/searchbar/SearchBar';
import SearchBarReturn from './components/searchbar/SearchBarReturn';
import RedditReturn from './components/reddit/RedditReturn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello World
          <SearchBarReturn />
          <SearchBar />
          <RedditReturn />
      </header>
    </div>
  );
};

export default App;
