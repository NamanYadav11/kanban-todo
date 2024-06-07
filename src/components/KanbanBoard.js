// src/components/KanbanBoard.js
import React from 'react';
import TaskList from './TaskList';
import { DndContext, closestCorners, useSensor, PointerSensor } from '@dnd-kit/core';

const KanbanBoard = ({ tasks, setTasks, deleteTask, toggleTaskCompletion }) => {
  const statuses = ['In Progress', 'Reviewed', 'Completed'];

  const sensors = [useSensor(PointerSensor)];

  const handleDragEnd = (event) => {
    const { active, over } = event;

    console.log('Active:', active);
    console.log('Over:', over);

    if (!over) return;

    const oldIndex = tasks.findIndex(task => task.id.toString() === active.id.toString());
    const newStatus = over.id;

    if (oldIndex === -1) {
      console.error(`Task with id ${active.id} not found in tasks array`);
      return;
    }

    if (tasks[oldIndex].status !== newStatus) {
      const updatedTasks = [...tasks];
      updatedTasks[oldIndex].status = newStatus;
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="flex space-x-4">
      <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        {statuses.map(status => (
          <TaskList
            key={status}
            status={status}
            tasks={tasks}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))}
      </DndContext>
    </div>
  );
};

export default KanbanBoard;
