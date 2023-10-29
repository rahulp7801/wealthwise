import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const StockPriceChart = ({ priceData }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const consecutiveNumbers = Array.from({ length: priceData.results.length }, (_, i) => i + 1);
  const openPrices = priceData.results.map((dataPoint) => dataPoint.o);
  const minY = Math.min(...openPrices);
  const maxY = Math.max(...openPrices);

  const suggestedMin = minY - 1;
  const suggestedMax = maxY + 1;
  
  useEffect(() => {
    if (chartRef.current && priceData) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: consecutiveNumbers,
          datasets: [
            {
              label: '1 Month Price',
              data: openPrices,
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              fill: false,
              showLine: true,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: 'linear',
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              min: suggestedMin, // Set the minimum y-axis value
              max: suggestedMax, // Set the maximum y-axis value
              grid: {
                display: false,
              },
              callback: (value, index, values) => {
                return '$' + value;
              },
            },
          },
        },
      });
    }
  }, [priceData]);

  useEffect(() => {
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div>
        <canvas ref={chartRef} />
        
    </div>
  );
};

export default StockPriceChart;
