import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css'; // Assuming you've set up Tailwind CSS correctly
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJs.register(Tooltip, Title, ArcElement, Legend);

const data = {
  datasets: [{
    data: [10, 20, 30],
    backgroundColor: ['Green', 'yellow', 'blue'],
  }],
  labels: ['Green', 'yellow', 'Blue'],
};

function Chart() {
  const [data, setData] = useState({
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: ['Green', 'yellow', 'blue'],
    }],
    labels: ['Green', 'Yellow', 'Blue'],
  });

//   useEffect(() => {
//     const fetchData = () => {
//       fetch('https://jsonplaceholder.typicode.com/users')
//         .then((data) => {
//           const res = data.json();
//           return res;
//         })
//         .then((res) => {
//           console.log("resss", res);
//           const label = [];
//           const data = [];
//           for (var i of res) {
//             label.push(i.name);
//             data.push(i.id);
//           }
//           setData({
//             datasets: [{
//               data: data,
//               backgroundColor: ['red', 'blue', 'yellow'],
//             }],
//             labels: label,
//           });
//         })
//         .catch(e => {
//           console.log("error", e);
//         });
//     };
//     fetchData();
//   }, []);

  return (
    <div className="absolute right-0 bottom-0 m-6 w-30%" >
      <Doughnut data={data} />
    </div>
  );
}

export default Chart;
