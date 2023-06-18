import React from 'react';

function TaskItem({ task, deleteTask, completeTask }) {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <span>{task.title}</span>
      <div>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
        {!task.completed && (
          <button onClick={() => completeTask(task.id)}>Complete</button>
        )}
      </div>
    </li>
  );
}

export default TaskItem;