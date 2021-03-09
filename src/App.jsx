import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from 'react-router-dom';
import Nav from './Shared/Nav';
import Routes from './Shared/Routes';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Nav/>
          <Routes/>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
