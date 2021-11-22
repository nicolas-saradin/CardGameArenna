import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <div className="NavBar">
      <span className="menu">Menu</span>
      <form>
        <div className="dropContent">
          <Link exact to="/">
            Accueil
          </Link>
          <Link exact to="/MemberShip">
            Become a Member
          </Link>
          <Link exact to="/Rules">
            Game Rules
          </Link>
          <Link exact to="/Gallery">
            Gallery
          </Link>
          <Link exact to="/LogIn">
            Log in
          </Link>
          <Link exact to="/Register">
            Register
          </Link>
          <Link exact to="/Contact">
            Contact
          </Link>
        </div>
      </form>
    </div>
  );
}
