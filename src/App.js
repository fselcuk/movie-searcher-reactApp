import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import SearchMovies from "./components/searchMovies";
import React from 'react';

function App() {
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <SearchMovies/>
    </div>
  );
}

export default App;
