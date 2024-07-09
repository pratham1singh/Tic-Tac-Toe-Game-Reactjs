import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Navbar from './Navbar';
// import Buttons from './Buttons';
import Board from './Board';
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Navbar/> */}
    {/* <Buttons/> */}
    {/* <Board/> */}
    <Home/>
  </React.StrictMode>
);