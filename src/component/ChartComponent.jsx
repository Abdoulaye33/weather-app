import React, { useEffect } from "react";
import Chart from "chart.js/auto"; 

const ChartComponent = () => {
  useEffect(() => {
    const myChart = document.getElementById("myChart");
    
    if (myChart) {
      const barChart = new Chart(myChart, {
        type: "bar",
        data: {
          labels: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
          datasets: [
            {
              data: [35, 32, 30, 28, 26, 24, 22],
              backgroundColor: ["red", "blue", "green", "yellow", "Magenta", "rosybrown", ""],
              label: 'Température en °C'
            }
          ],
        },
        options: {
          scales: {
            y: {
              max: 50,
              ticks: {
                font: {
                  size: 20
                }
              }
            },
            x: {
              ticks: {
                font: {
                  size: 18
                }
              }
            }
          }
        }
      });
    }
  }, []);

  return (
    <div>
      <canvas id="myChart" aria-label="chart" role="img"></canvas>
    </div>
  );
};

export default ChartComponent;
