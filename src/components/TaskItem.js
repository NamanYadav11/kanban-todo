// src/components/TaskItem.js
import React from 'react';
import { useDraggable } from '@dnd-kit/core';

const TaskItem = ({ task, deleteTask, toggleTaskCompletion }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({
    id: task.id.toString(),
  });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="bg-white p-4 rounded shadow mb-4">
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
