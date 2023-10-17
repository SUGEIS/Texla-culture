// // import { useEffect, useState } from 'react';
// // import './App.css';
// // import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
// // import { Doughnut } from 'react-chartjs-2';
// // ChartJs.register(
// //   Tooltip, Title, ArcElement, Legend
// // );


// // const data = {
// //     datasets: [{
// //         data: [10, 20, 30],
// //         backgroundColor:[
// //           'red',
// //           'blue',
// //           'yellow'
// //         ]
// //     },
// //   ],
// //   // These labels appear in the legend and in the tooltips when hovering different arcs
// //   labels: [
// //       'Red',
// //       'Yellow',
// //       'Blue'
// //   ], 
// // };

// // function App() {
// //   const [data, setData] = useState({
// //     datasets: [{
// //         data: [10, 20, 30],
// //         backgroundColor:[
// //           'red',
// //           'blue',
// //           'yellow'
// //         ]
// //     },
// //   ],
// //   labels: [
// //       'Red',
// //       'Yellow',
// //       'Blue'
// //   ], 
// // });
// //   useEffect(()=> {
// //     const fetchData = () =>  {
// //       fetch('https://jsonplaceholder.typicode.com/users').then((data) => {
// //         const res = data.json();
// //         return res
// //       }).then((res) => {
// //         console.log("resss", res)
// //         const label = [];
// //         const data = [];
// //         for(var i of res) {
// //             label.push(i.name);
// //             data.push(i.id)
// //         }
// //         setData(
// //           {
// //             datasets: [{
// //                 data:data,
// //                 backgroundColor:[
// //                   'red',
// //                   'blue',
// //                   'yellow'
// //                 ]
// //             },
// //           ],
// //           labels:label, 
// //         }
// //         )

// //       }).catch(e => {
// //         console.log("error", e)
// //       }) 
// //     }
// //   fetchData();
// //   }, [])
// //   return (
// //     <div className="App" style={{width:'30%', height:'30%'}}>
// //       <Doughnut data={data}/>
// //     </div>
// //   );
// // }

// // export default App;
// // import React from 'react'

// // const Maincontainer = () => {
// //   return (
// //     <div>
// //         <div>
// //         <h4>Client Management</h4>
// //         <h3>Dashboard Client Details</h3>
// //         </div>

// //         <div>

// //         </div>
// //     </div>

    
// //   )
// // }

// // export default Maincontainer

// // import React from 'react';

// // const Maincontainer = () => {
// //   return (
    

// //   );
// // };

// // export default Maincontainer;


// // import React from 'react';
// // import { useEffect, useState } from 'react';
// // import './App.css';
// // import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
// // import { Doughnut } from 'react-chartjs-2';

// // const firstBoxStyle = {
// //   width: '600px',
// //   height: '160px',
// //   top: '211px',
// //   left: '385px',
// // };

// // const secondBoxStyle = {
// //   width: '441px',
// //   height: '179px',
// //   top: '211px',
// //   left: '1px',
// // };



// // const thirdBoxStyle = {
// //   width: '295px',
// //   height: '179px',
// //   top: '212px',
// //   left: '1537px',
// // };

// // const fourBoxStyle = {
// //   width: '920px',
// //   height: '491px',
// //   top: '414px',
// //   left: '385px',
// // };

// // const fiveBoxStyle = {
// //   width: '492px',
// //   height: '491px',
// //   top: '412px',
// //   left: '1345px',
// // };

// // // In your React component
// // const customContentClass = `
// //   text-ks-primary-text
// //   text-16
// //   font-public-sans
// //   font-semibold
// //   leading-24
// //   break-words
// // `;


// // const Maincontainer = () => {
// //   return (
// //     <div className="h-screen flex flex-col justify-between p-4 relative">
// //       <div class="text-ks-primary-text text-lg font-public-sans font-semibold leading-6 break-words">
// //   Client Management
// // </div>

// // <div className="w-full h-full flex items-center py-13 border-b-2 ">
// //   <div className="pl-4">
// //     <div className="text-ks-primary-text text-base font-public-sans font-semibold leading-6">
// //       <span className="text-green-600 underline" > <span className='text-black'>Dashboard</span></span>
// //     </div>
// //   </div>
// //   <div className="pl-4">
// //     <div className="text-gray-600 text-base font-public-sans font-semibold leading-6 break-words">Clients Details</div>
// //   </div>
// // </div>






      
    
// //  <div className="flex justify-between">
      

// //         <div className="p-4 border border-gray-300" style={firstBoxStyle}>
// //   <h4 className={customContentClass}>Key Performance Indicator</h4>
// //   <p className={customContentClass}>Client Retention Rate</p>
// //   <p className={customContentClass}>55%</p>
// //   <p className={customContentClass}>Client Satisfaction</p>
// //   <p className={customContentClass}>55%</p>
// //   <p className={customContentClass}>Revenue Generated</p>
// //   <p className={customContentClass}>55%</p>
// // </div>

// //         <div className="w-64 p-4 border border-gray-300" style={secondBoxStyle}>
// //           <h3>Dashboard Client Details</h3>
// //         </div>
// //         <div className="w-36 p-4 border border-gray-300" style={thirdBoxStyle}>
// //           {/* Content for the third top box */}
// //         </div>
// //       </div>

// //       <div className="flex flex-grow">
// //         <div className="w-1/2 p-4 border border-gray-300 "style={fourBoxStyle}>
// //           {/* Content for the first bottom large box */}
// //         </div>
// //         <div className="w-1/2 p-4 border border-gray-300 "style={fiveBoxStyle}>
// //           {/* Content for the second bottom large box */}

         
// // ChartJs.register(
// //   Tooltip, Title, ArcElement, Legend
// // );


// // const data = {
// //     datasets: [{
// //         data: [10, 20, 30],
// //         backgroundColor:[
// //           'red',
// //           'blue',
// //           'yellow'
// //         ]
// //     },
// //   ],
// //   // These labels appear in the legend and in the tooltips when hovering different arcs
// //   labels: [
// //       'Red',
// //       'Yellow',
// //       'Blue'
// //   ], 
// // };
// // function App() {
// //   const [data, setData] = useState({
// //     datasets: [{
// //         data: [10, 20, 30],
// //         backgroundColor:[
// //           'red',
// //           'blue',
// //           'yellow'
// //         ]
// //     },
// //   ],
// //   labels: [
// //       'Red',
// //       'Yellow',
// //       'Blue'
// //   ], 
// // });
// //   useEffect(()=> {
// //     const fetchData = () =>  {
// //       fetch('https://jsonplaceholder.typicode.com/users').then((data) => {
// //         const res = data.json();
// //         return res
// //       }).then((res) => {
// //         console.log("resss", res)
// //         const label = [];
// //         const data = [];
// //         for(var i of res) {
// //             label.push(i.name);
// //             data.push(i.id)
// //         }
// //         setData(
// //           {
// //             datasets: [{
// //                 data:data,
// //                 backgroundColor:[
// //                   'red',
// //                   'blue',
// //                   'yellow'
// //                 ]
// //             },
// //           ],
// //           labels:label, 
// //         }
// //         )

// //       }).catch(e => {
// //         console.log("error", e)
// //       }) 
// //     }
// //   fetchData();
// //   }, [])
// //   return (
// //     <div className="App" style={{width:'30%', height:'30%'}}>
// //       <Doughnut data={data}/>
// //     </div>
// //   );
// // }

// // export default App;
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Maincontainer;


// // import React, { useEffect, useState } from 'react';
// // import './App.css';
// // import { Doughnut } from 'react-chartjs-2';
// // import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';

// // const firstBoxStyle = {
// //   width: '600px',
// //   height: '160px',
// //   top: '211px',
// //   left: '385px',
// // };

// // const secondBoxStyle = {
// //   width: '441px',
// //   height: '179px',
// //   top: '211px',
// //   left: '1px',
// // };

// // const thirdBoxStyle = {
// //   width: '295px',
// //   height: '179px',
// //   top: '212px',
// //   left: '1537px',
// // };

// // const fourBoxStyle = {
// //   width: '920px',
// //   height: '491px',
// //   top: '414px',
// //   left: '385px',
// // };

// // const fiveBoxStyle = {
// //   width: '492px',
// //   height: '491px',
// //   top: '412px',
// //   left: '1345px',
// // };

// // // In your React component
// // const customContentClass = `
// //   text-ks-primary-text
// //   text-16
// //   font-public-sans
// //   font-semibold
// //   leading-24
// //   break-words
// // `;

// // const Maincontainer = () => {
// //   return (
// //     <div className="h-screen flex flex-col justify-between p-4 relative">
// //       <div className="text-ks-primary-text text-lg font-public-sans font-semibold leading-6 break-words">
// //         Client Management
// //       </div>

// //       <div className="w-full h-full flex items-center py-13 border-b-2 ">
// //         <div className="pl-4">
// //           <div className="text-ks-primary-text text-base font-public-sans font-semibold leading-6">
// //             <span className="text-green-600 underline">
// //               <span className="text-black">Dashboard</span>
// //             </span>
// //           </div>
// //         </div>
// //         <div className="pl-4">
// //           <div className="text-gray-600 text-base font-public-sans font-semibold leading-6 break-words">
// //             Clients Details
// //           </div>
// //         </div>
// //       </div>

// //       <div className="flex justify-between">
// //         <div className="p-4 border border-gray-300" style={firstBoxStyle}>
// //           <h4 className={customContentClass}>Key Performance Indicator</h4>
// //           <p className={customContentClass}>Client Retention Rate</p>
// //           <p className={customContentClass}>55%</p>
// //           <p className={customContentClass}>Client Satisfaction</p>
// //           <p className={customContentClass}>55%</p>
// //           <p className={customContentClass}>Revenue Generated</p>
// //           <p className={customContentClass}>55%</p>
// //         </div>

// //         <div className="w-64 p-4 border border-gray-300" style={secondBoxStyle}>
// //           <h3>Dashboard Client Details</h3>
// //         </div>
// //         <div className="w-36 p-4 border border-gray-300" style={thirdBoxStyle}>
// //           {/* Content for the third top box */}
// //         </div>
// //       </div>

// //       <div className="flex flex-grow">
// //         <div className="w-1/2 p-4 border border-gray-300" style={fourBoxStyle}>
// //           {/* Content for the first bottom large box */}
// //         </div>
// //         <div className="w-1/2 p-4 border border-gray-300" style={fiveBoxStyle}>
// //           {/* Content for the second bottom large box */}
// //           <ChartJs.register(Tooltip, Title, ArcElement, Legend);

// //           const [chartData, setChartData] = useState({
// //             datasets: [
// //               {
// //                 data: [10, 20, 30],
// //                 backgroundColor: ['red', 'blue', 'yellow'],
// //               },
// //             ],
// //             labels: ['Red', 'Yellow', 'Blue'],
// //           });

// //           useEffect(() => {
// //             const fetchData = () => {
// //               fetch('https://jsonplaceholder.typicode.com/users')
// //                 .then((response) => response.json())
// //                 .then((data) => {
// //                   console.log("Data", data);
// //                   const labels = data.map((item) => item.name);
// //                   const values = data.map((item) => item.id);

// //                   setChartData({
// //                     datasets: [
// //                       {
// //                         data: values,
// //                         backgroundColor: ['red', 'blue', 'yellow'],
// //                       },
// //                     ],
// //                     labels: labels,
// //                   });
// //                 })
// //                 .catch((error) => {
// //                   console.error("Error", error);
// //                 });
// //             };
// //             fetchData();
// //           }, []);

// //           return (
// //             <div className="App" style={{ width: '30%', height: '30%' }}>
// //               <Doughnut data={chartData} />
// //             </div>
// //           );
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Maincontainer;


// import { useEffect, useState } from 'react';
// //import './App.css';
// import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';
// ChartJs.register(
//   Tooltip, Title, ArcElement, Legend
// );


// const data = {
//     datasets: [{
//         data: [10, 20, 30],
//         backgroundColor:[
//           'red',
//           'blue',
//           'yellow'
//         ]
//     },
//   ],
//   // These labels appear in the legend and in the tooltips when hovering different arcs
//   labels: [
//       'Red',
//       'Yellow',
//       'Blue'
//   ], 
// };
// function Chart() {
//   const [data, setData] = useState({
//     datasets: [{
//         data: [10, 20, 30],
//         backgroundColor:[
//           'red',
//           'blue',
//           'yellow'
//         ]
//     },
//   ],
//   labels: [
//       'Red',
//       'Yellow',
//       'Blue'
//   ], 
// });
//   useEffect(()=> {
//     const fetchData = () =>  {
//       fetch('https://jsonplaceholder.typicode.com/users').then((data) => {
//         const res = data.json();
//         return res
//       }).then((res) => {
//         console.log("resss", res)
//         const label = [];
//         const data = [];
//         for(var i of res) {
//             label.push(i.name);
//             data.push(i.id)
//         }
//         setData(
//           {
//             datasets: [{
//                 data:data,
//                 backgroundColor:[
//                   'red',
//                   'blue',
//                   'yellow'
//                 ]
//             },
//           ],
//           labels:label, 
//         }
//         )

//       }).catch(e => {
//         console.log("error", e)
//       }) 
//     }
//   fetchData();
//   }, [])
//   return (
//     <div className="App" style={{width:'30%', height:'30%'}}>
//       <Doughnut data={data}/>
//     </div>
//   );
// }

// export default Chart;
