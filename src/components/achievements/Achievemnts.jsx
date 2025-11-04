import React from 'react';
import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import revenueData from '../../graphDatas/revenueData.json';
import studentsTrained from '../../graphDatas/studentsTrained.json';

const Achievements = () => {
  defaults.maintainAspectRatio = true;
  defaults.responsive = true;

  defaults.plugins.title.display = true;
  defaults.plugins.title.padding = 10;
  defaults.plugins.title.align = 'end';
  defaults.plugins.title.font.size = 24;
  defaults.plugins.title.color = 'white';
  defaults.plugins.title.font.weight = 0.5;

  return (
    <div className="flex flex-col md:flex-row justify-center gap-10 p-5 items-center  md:p-10 space-y-10 md:space-y-0">
      {/* Revenue / Profit Chart */}
      <div id="leadGrowth" className="w-full md:w-1/3">
        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: 'Profit',
                data: revenueData.map((data) => data.cost),
                backgroundColor: '#008000',
                borderColor: '#008000',
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: 'Cost & Profit',
              },
              legend: {
                labels: {
                  color: 'white',
                },
              },
            },
            scales: {
              x: {
                ticks: { color: 'white' },
                grid: { color: 'rgba(255,255,255,0.1)' },
              },
              y: {
                ticks: { color: 'white' },
                grid: { color: 'rgba(255,255,255,0.1)' },
              },
            },
          }}
        />
      </div>

      {/* Students Trained Chart */}
      <div id="studentsTrained" className="w-full md:w-1/3">
        <Line
          data={{
            labels: studentsTrained.map((data) => data.label),
            datasets: [
              {
                label: 'Students',
                data: studentsTrained.map((data) => data.cost),
                backgroundColor: '#0000ff',
                borderColor: '#0000ff',
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: 'Students Trained',
              },
              legend: {
                labels: {
                  color: 'white',
                },
              },
            },
            scales: {
              x: {
                ticks: { color: 'white' },
                grid: { color: 'rgba(255,255,255,0.1)' },
              },
              y: {
                ticks: { color: 'white' },
                grid: { color: 'rgba(255,255,255,0.1)' },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Achievements;
