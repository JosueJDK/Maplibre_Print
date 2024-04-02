import React from 'react';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export function PieChart({labelsAll, label, dataAPI, title, color}:{labelsAll : any, label: any, dataAPI: any, title: any, color: any}) {
    
  const options = {
      responsive: true,
      plugins: {
      legend: {
          position: 'bottom' as const,
      },
      title: {
          display: true,
          text: title,
      },
      },
  };

  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 156) + 100; // Rango de 100 a 255 para tonos pasteles
    const g = Math.floor(Math.random() * 156) + 100; // Rango de 100 a 255 para tonos pasteles
    const b = Math.floor(Math.random() * 156) + 100; // Rango de 100 a 255 para tonos pasteles
    return `rgba(${r}, ${g}, ${b}, 0.5)`; // 0.5 es la opacidad para tonos pasteles
  };

  const datasets = [
      {
        labels: label,
        data: labelsAll.map(_label => {
          const dataItem = dataAPI.find(item => item[label] === _label);
          return dataItem ? dataItem.suma_viajes : 0;
        }),
        backgroundColor: color,
      },
  ];    
  const data = {
      labels: labelsAll,
      datasets: datasets,
  };

  
  return <Pie options={options} data={data} />;
}