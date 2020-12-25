import './App.css';

import BookSearch from './components/BookSearch';

function App() {
  return (
    <div className="app">
      <header>
        <div className="book__search">
          <BookSearch />
        </div>
      </header>
    </div>
  );
}

export default App;
