import React from 'react';
import '../Styling/sidebar/sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Navigation</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
