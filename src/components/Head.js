// import React from 'react'

// const Head = () => {
//   return (
//     <div className='grid grid-flow-col p-2 m-4'>
//         <div >
          
//           <div className="col-span-10">
//           <button>🔍</button>
//             <input className='w-11/12' type="text"/>
            
//             </div>
//         </div>
//         <div className='grid grid-flow-col  d-flex my-4'>
//           <img className="h-8"  alt="flag" src="https://flagsofallnations.com.au/cdn/shop/products/nz.jpg?v=1558054663"/>
        
        
//           <img className="h-8" alt="notify" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6SlO05tuWf5zoVfxg7XiMGr6VoavCbSs6ZQ&usqp=CAU"/>
        
       
//           <img className="h-8" alt="people" src="https://png.pngtree.com/png-vector/20191004/ourmid/pngtree-person-icon-png-image_1788612.jpg"/>
        
//           <img  className="h-8" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMTwty9_ztlEqD8GVwZJYCwn-Dui1EV1Vvg&usqp=CAU"/>
//         </div>

            
            

//         </div>
//   )
// }

// export default Head;

import React from 'react';

const Head = () => {
  return (
    
    <div className="flex justify-between items-center p-2 m-4">
      <div className="flex items-center">
 
        <input className="w-96" type="text" />
      </div>
      <div className="flex space-x-2">
        <img className="h-8" alt="flag" src="https://flagsofallnations.com.au/cdn/shop/products/nz.jpg?v=1558054663" />
        <img className="h-8" alt="notify" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6SlO05tuWf5zoVfxg7XiMGr6VoavCbSs6ZQ&usqp=CAU" />
        <img className="h-8" alt="people" src="https://png.pngtree.com/png-vector/20191004/ourmid/pngtree-person-icon-png-image_1788612.jpg" />
        <img className="h-8" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMTwty9_ztlEqD8GVwZJYCwn-Dui1EV1Vvg&usqp=CAU" />
      </div>
    </div>
  );
};

export default Head;


