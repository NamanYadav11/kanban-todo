// src/App.js
import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import KanbanBoard from './components/KanbanBoard';
import SortAndSearch from './components/SortAndSearch';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
    setFilteredTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    setFilteredTasks(tasks);
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const clearCompletedTasks = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
      <TaskForm addTask={addTask} />
      <SortAndSearch tasks={tasks} setFilteredTasks={setFilteredTasks} />
      <KanbanBoard
        tasks={filteredTasks}
        setTasks={setTasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
      <button
        onClick={clearCompletedTasks}
        className="mt-4 p-2 bg-green-500 text-white rounded"
      >
        Clear Completed Tasks
      </button>
    </div>
  );
};

export default App;
