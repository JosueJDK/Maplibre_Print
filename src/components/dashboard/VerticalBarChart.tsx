import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function VerticalChart({labelsAll, label, dataAPI, title, color}:{labelsAll : any, label: any, dataAPI: any, title: any, color: string}) {
    
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

  const datasets = [
      {
        label: label,
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

  
  return <Bar options={options} data={data} />;
}