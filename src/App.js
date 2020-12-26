import './App.css';

import BookSearch from './components/book-search/BookSearch';
import Books from './components/books/Books';

function App() {
  return (
    <div className="app">
      <header>
          <BookSearch />
      </header>
      <Books />
    </div>
  );
}

export default App;
