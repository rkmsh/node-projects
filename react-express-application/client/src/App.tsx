import { useState } from 'react';
import './App.css';

function App() {


  const [data, setData] = useState('');

  const connectToBackend = () => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  };

  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to My Application</h1>
        <p>Your gateway to amazing experiences.</p>
      </header>
      <main className="main-content">
        <button className="cta-button" onClick={() => alert('Get Started!')}>
          Get Started
        </button>
        <div className="App">
          <button onClick={connectToBackend}>Send Request to Backend</button>
          {/* Render the newly fetched data inside data */}
          <p>{data}</p>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2023 My Application. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
