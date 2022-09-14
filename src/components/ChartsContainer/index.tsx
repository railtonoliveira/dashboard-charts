import { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { ChartsContainerProps } from './interface';

const ChartsContainer = ({ type, labels, label, data, colors, title }: ChartsContainerProps) => {

    const [chartData, setChartData] = useState<string | number[]>({
        labels: labels,
        datasets: [
          {
            label: label,
            data: data,
            backgroundColor: colors,
          }
        ]
    });

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: title,
          },
        },
      };

    return (
        <div>
          {(() => {
              switch (type) {
                case 'Bar':
                  return <Bar data={chartData} options={options} />
                case 'Line':
                  return <Line data={chartData} options={options} />
                default:
                  return alert("Chart não existe!");
              }
            })()}
        </div>
    )
}

export default ChartsContainer;