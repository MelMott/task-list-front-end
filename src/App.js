import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];


const App = () => {
  const [tasks, setTasks] = useState(TASKS); // Store tasks in state
  
//   const setComplete = async (taskId) => {
//   try {
//     const taskToUpdate = tasks.find((task) => task.id === taskId);
//     const updatedTask = { ...taskToUpdate, isComplete: !taskToUpdate.isComplete };
//     const response = await axios.patch(`https://task-list-api-c17.onrender.com/tasks/${taskId}/${updatedTask.isComplete ? 'mark_complete' : 'mark_incomplete'}`, updatedTask);
//     setTasks((prevTasks) => prevTasks.map((task) => (task.id === taskId ? response.data : task)));
//   } catch (error) {
//     console.error('Error updating task:', error);
//   }
// };

  const setComplete = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, 'isComplete': !task.isComplete };
        }
        return task;
      });
    });
  };

  const removeTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
  
    fetchTasks();
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div><TaskList tasks={tasks} setComplete={setComplete} removeTask={removeTask} /></div>
      </main>
    </div>
  );
};

export default App;