import React from 'react';
import '../Styling/navbar/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Task manager</h1>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Settings</a>
      </div>
    </div>
  );
};

export default Navbar;
