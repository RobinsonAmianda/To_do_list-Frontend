import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import TaskList from '../tasklist/Tasklist';
import '../Styling/Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="content">
        <Sidebar />
        <TaskList />
      </div>
    </div>
  );
};

export default Home;
