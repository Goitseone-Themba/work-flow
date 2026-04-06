import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import WeatherWidget from '../components/WeatherWidget'; 
import AddTaskForm from '../components/AddTaskForm';
import ImportantTasks from '../components/ImportantTasks';
import AssignedTasks from '../components/AssignedTasks';
import PrioritySettings from '../components/PrioritySettings';
import Analytics from '../components/Analytics';

export const Dashboard = () => {
  // Mock data
  const userName = "John Doe"; 
  const earnedPoints = 120; 
  const plannerStatus = "Intermediate Planner"; 

  // State for tasks
  const [tasks, setTasks] = useState([
    { name: "Task 1", priority: "low" },
    { name: "Task 2", priority: "medium" },
    { name: "Task 3", priority: "high" }
  ]);

  // State for active service in the center column
  const [activeService, setActiveService] = useState(null);

  // State for stopwatch
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // State for upcoming tasks dropdown
  const [showUpcomingTasks, setShowUpcomingTasks] = useState(false);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setStopwatchTime(0);
    setIsRunning(false);
  };

  const toggleUpcomingTasks = () => {
    setShowUpcomingTasks(!showUpcomingTasks);
  };

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setStopwatchTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  // Filter important tasks based on priority
  const importantTasks = tasks.filter(task => task.priority === 'high');

  return (
    <div className="dashboard">
      <header className="header">
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <span className="search-icon">🔍</span>
        </div>
      </header>

      <div className="body">
        <div className="column column-left">
          <div className="profile-container">
            <div className="avatar">JD</div> {/* User initials */}
            <h2>{userName}</h2>
            <p>Earned Points: {earnedPoints}</p>
            <p>Status: {plannerStatus}</p>
          </div>

          <div className="button-container">
            <button className="action-button" onClick={() => setActiveService('AddTask')}>Add new Task</button>
            <button className="action-button" onClick={() => setActiveService('ImportantTasks')}>Important Tasks</button>
            <button className="action-button" onClick={() => setActiveService('AssignedTasks')}>Assigned Tasks</button>
            <button className="action-button" onClick={() => setActiveService('PrioritySettings')}>Priority Settings</button>
            <button className="action-button" onClick={() => setActiveService('Analytics')}>Analytics</button>
          </div>
        </div>

        <div className="column column-center" style={{ position: 'relative' }}>
          <WeatherWidget />
          <div className="main-container">
            {activeService === 'AddTask' && <AddTaskForm />}
            {activeService === 'ImportantTasks' && <ImportantTasks tasks={importantTasks} />}
            {activeService === 'AssignedTasks' && <AssignedTasks />}
            {activeService === 'PrioritySettings' && <PrioritySettings tasks={tasks} setTasks={setTasks} />}
            {activeService === 'Analytics' && <Analytics tasks={tasks} />}
            {/* Render other components conditionally based on activeService */}
          </div>
        </div>

        <div className="column column-right">
          <div className="upcoming-tasks">
            <button className="dropdown-button" onClick={toggleUpcomingTasks}>
              Upcoming Tasks {showUpcomingTasks ? "▲" : "▼"}
            </button>
            {showUpcomingTasks && (
              <div className="upcoming-tasks-list">
                <p>Task 1</p>
                <p>Task 2</p>
                <p>Task 3</p>
              </div>
            )}
          </div>

          <div className="stopwatch">
            <div className="stopwatch-time">
              {new Date(stopwatchTime * 1000).toISOString().substr(11, 8)}
            </div>
            <button className="stopwatch-button" onClick={handleStartStop}>
              {isRunning ? "Stop" : "Start"}
            </button>
            <button className="stopwatch-button" onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;















