import React from 'react';

const TaskItem = ({ task, deleteTask, toggleTaskCompletion }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <div className="flex justify-between">
        <h3 className={`font-bold ${task.completed ? 'line-through' : ''}`}>{task.name}</h3>
        <button
          onClick={() => deleteTask(task.id)}
          className="ml-auto p-2 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
      <p className="text-gray-600">Due: {task.dueDate}</p>
      <div className="flex items-center mt-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
          className="mr-2"
        />
        <span>{task.completed ? 'Completed' : 'Incomplete'}</span>
      </div>
    </div>
  );
};

export default TaskItem;
