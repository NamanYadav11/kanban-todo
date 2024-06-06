import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion, status }) => {
  return (
    <div className="bg-gray-100 p-4 rounded shadow w-full">
      <h2 className="font-bold text-lg mb-4">{status}</h2>
      {tasks.filter(task => task.status === status).map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </div>
  );
};

export default TaskList;
