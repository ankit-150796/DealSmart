import { useState} from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const options = {
    indeyAxis: 'x',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },

    responsive: true,
      plugins: {
        legend: {
            display: false,
            labels: {
                color: '#333'
            }
        }
      }
  };

const PlatformBarChart =() => {
    const [data] = useState({
      labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [{
          label: "Visitors on the platform",
          borderWidth: 1 ,
          backgroundColor: "#84d9d2",
           borderColor: "#84d9d2",
           data: [5 ,10, 20, 5, 10, 30, 40, 20, 10, 40, 20, 40  ]
      }]
      });
   
   
    return(
        <>
           <Bar data={data} options={options}/>
        </>
         )
}

export default PlatformBarChart