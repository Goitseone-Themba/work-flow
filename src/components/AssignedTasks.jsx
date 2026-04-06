
import React from 'react';
import './AssignedTasks.css';

const AssignedTasks = () => {
  // Mock data
  const tasks = [
    { id: 1, task: 'Task A', assignee: 'Alice', dueDate: '2024-07-27' },
    { id: 2, task: 'Task B', assignee: 'Bob', dueDate: '2024-07-28' },
  ];

  return (
    <div className="assigned-tasks">
      <h2>Assigned Tasks</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Assignee</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.task}</td>
              <td>{task.assignee}</td>
              <td>{task.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignedTasks;
