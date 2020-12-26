import './App.css';

import BookSearch from './components/BookSearch';
import Books from './components/books/Books';

function App() {
  return (
    <div className="app">
      <header>
        <div className="book__search">
          <BookSearch />
        </div>
      </header>
      <Books />
    </div>
  );
}

export default App;
