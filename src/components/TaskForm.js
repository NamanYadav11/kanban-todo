import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !dueDate) {
      alert('Please enter both a task name and a due date');
      return;
    }
    const newTask = {
      id: Date.now(),
      name: taskName,
      dueDate,
      completed: false,
      status: 'In Progress'
    };
    addTask(newTask);
    setTaskName('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex flex-col mb-2">
        <label className="mb-1">Task Name</label>
        <input
          type="text"
          className="p-2 border rounded"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-2">
        <label className="mb-1">Due Date</label>
        <input
          type="date"
          className="p-2 border rounded"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
