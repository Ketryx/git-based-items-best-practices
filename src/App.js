import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <p>
                  A basic web application initialized with <a className="App-link" href="https://create-react-app.dev/"
                                                              rel="nofollow noopener noreferrer">Create React App</a>
              </p>
          <nav>
              <ul>
                  <li>
                      <a href={`/alm`}>ALM</a>
                  </li>
                  <li>
                      <a href={`/git-based-items`}>Git-based Items</a>
                  </li>
              </ul>
          </nav>
          </header>
      </div>
  );
}

export default App;
