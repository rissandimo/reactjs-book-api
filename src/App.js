import './App.css';

import BookSearch from './BookSearch';

import bgImg from './header-pic.jpg';

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
