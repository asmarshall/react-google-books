import './App.css';
import React, { useState } from 'react';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const onInputChange = (e) => {
    setSearchInput(e.target.value);
  }
  let GOOGLE_BOOK_API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchBooks = async () => {
    const result = await fetch(`${GOOGLE_BOOK_API_URL}?q=${searchInput}`)
                           .then(response => response.json())
                           .then(data => console.log(data));
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetchBooks();
  }

  return (
    <div className="App">
      <section>
        <h1>Google Book Search</h1>
        <form onSubmit={onSubmitHandler}>
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
