
import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './Analytics.css';

const Analytics = ({ tasks }) => {
  const importantTasks = tasks.filter(task => task.priority === 'high').length;
  const mediumTasks = tasks.filter(task => task.priority === 'medium').length;
  const lowTasks = tasks.filter(task => task.priority === 'low').length;

  const dataPie = {
    labels: ['High Priority', 'Medium Priority', 'Low Priority'],
    datasets: [
      {
        label: 'Task Priority Distribution',
        data: [importantTasks, mediumTasks, lowTasks],
        backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
      },
    ],
  };

  const dataBar = {
    labels: ['High Priority', 'Medium Priority', 'Low Priority'],
    datasets: [
      {
        label: 'Task Count',
        data: [importantTasks, mediumTasks, lowTasks],
        backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
      },
    ],
  };

  const dataLine = {
    labels: ['High Priority', 'Medium Priority', 'Low Priority'],
    datasets: [
      {
        label: 'Task Trend',
        data: [importantTasks, mediumTasks, lowTasks],
        fill: false,
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EB',
      },
    ],
  };

  return (
    <div className="analytics">
      <h2>Analytics</h2>

      <div className="chart-container">

        <div className="chart">
          <h3>Task Priority Distribution</h3>
          <Pie data={dataPie} />
        </div>

        <div className="chart">
          <h3>Task Count by Priority</h3>
          <Bar data={dataBar} />
        </div>

        <div className="chart">
          <h3>Task Trend</h3>
          <Line data={dataLine} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
