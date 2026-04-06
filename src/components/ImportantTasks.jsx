import React, { useState, useEffect } from 'react';
import './ImportantTasks.css';

export const ImportantTasks = () => {
  // Mock important tasks data
  const [tasks, setTasks] = useState([
    { id: 1, task: "Complete React project", dueDate: "2024-08-01" },
    { id: 2, task: "Prepare presentation", dueDate: "2024-08-03" },
    { id: 3, task: "Finish reading book", dueDate: "2024-08-05" },
  ]);

  // Fetch important tasks (for real implementation)
  useEffect(() => {
    // Fetch tasks from API or database
    // setTasks(fetchedTasks);
  }, []);

  return (
    <div className="important-tasks">
      <h2>Important Tasks</h2>
      <table className="tasks-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.task}</td>
              <td>{task.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ImportantTasks;
