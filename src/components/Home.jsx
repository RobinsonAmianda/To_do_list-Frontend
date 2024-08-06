import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [taskDescription, setTaskDescription] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), description: taskDescription, status: 'pending' };
  
    fetch('http://127.0.0.1:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to add task');
      }
      return response.json();
    })
    .then(addedTask => {
      setTasks([...tasks, addedTask]);
      setTaskDescription('');
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  const updateTaskStatus = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status: task.status === 'pending' ? 'complete' : 'pending' } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
      <div className="container">
        <div className="logo">
          <h2>To-Do List</h2>
          <img src="https://cdn-icons-png.flaticon.com/512/6194/6194029.png" alt="logo" style={{ width: '45px', marginLeft:'20px'}} />
        </div>
        <form onSubmit={addTask} className="task-form">
          <input
            type="text"
            placeholder="Task Description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
          />
          <button type="submit">Add Task</button>
        </form>
        <ul className="task-list">
          {tasks.map(task => (
            <li key={task.id} className={task.status}>
              <span>
                <input
                  type="checkbox"
                  checked={task.status === 'complete'}
                  onChange={() => updateTaskStatus(task.id)}
                />
                {task.description}
              </span>
              <button onClick={() => deleteTask(task.id)}>Update</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
