import React from 'react';
import NavBar from '../NavBar/NavBar';
import logo from './logo.png';
import './Header.css';

export default function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">Card Game Arena</h1>
      </div>
      <NavBar />
    </header>
  );
}
