import React, { useState } from 'react';
import TaskForm from './Component/TaskForm';
import TaskList from './Component/TaskList';

import'./App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = {
      id: Math.random().toString(),
      title: task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  return (
    <div className='containers'>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList
       tasks={tasks}
      deleteTask={deleteTask}
      completeTask={completeTask}
      />
    </div>
  );
}

export default App;