import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <h1>Google Book Search</h1>
        <form>
          <input
            type="search"
            placeholder="harry potter, lord of the rings, etc..."
          />
          <button type="submit">Search</button>
        </form>
      </section>
    </div>
  );
}

export default App;
