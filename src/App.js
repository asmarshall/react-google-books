import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const onInputChange = (e) => {
    setSearchInput(e.target.value);
  }

  return (
    <div className="App">
      <section>
        <h1>Google Book Search</h1>
        <form>
          <input
            type="search"
            placeholder="harry potter, lord of the rings, etc..."
            value={searchInput}
            onChange={onInputChange}
          />
          <button type="submit">Search</button>
        </form>
      </section>
    </div>
  );
}

export default App;
