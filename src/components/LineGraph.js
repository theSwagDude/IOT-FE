
import Chart from 'chart.js/auto';
import React from 'react';
import { Line } from 'react-chartjs-2';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data1 = {
  labels,
  datasets: [
    {
      label: 'Temparature',
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const data2 = {
  labels,
  datasets: [
    {
      label: 'Humidity',
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      data: [10, 20, 30, 40, 50, 60, 70],
    },
  ],
};

const data3 = {
  labels,
  datasets: [
    {
      label: 'Pump',
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      data: [70, 60, 50, 40, 30, 20, 10],
    },
  ],
};

export function LineGraph1() {
  return <Line data={data1} />;
}

export function LineGraph2() {
  return <Line data={data2} />;
}

export function LineGraph3() {
  return <Line data={data3} />;
}
