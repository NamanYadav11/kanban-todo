import React from 'react';
import TaskList from './TaskList';

const KanbanBoard = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  const statuses = ['In Progress', 'Reviewed', 'Completed'];

  return (
    <div className="flex space-x-4">
      {statuses.map(status => (
        <TaskList
          key={status}
          status={status}
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
