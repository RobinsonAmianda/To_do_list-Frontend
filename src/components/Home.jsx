import React, { useState } from 'react';


function Home() {
  const [tasks, setTasks] = useState([]);
  const [taskDescription, setTaskDescription] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), description: taskDescription, status: 'pending' };
    setTasks([...tasks, newTask]);
    setTaskDescription('');
  };

  const updateTaskStatus = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status: task.status === 'pending' ? 'complete' : 'pending' } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container">
      <h2>To-Do List</h2>
      <form onSubmit={addTask}>
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
            {task.description}
            <button onClick={() => updateTaskStatus(task.id)}>
              {task.status === 'pending' ? 'Mark as Complete' : 'Mark as Pending'}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;