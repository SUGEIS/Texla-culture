import React from 'react'
import Sidebar from './Sidebar';
import Maincontainer from './Maincontainer';
// import Head from './Head';

const Body = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        
        <Maincontainer/>
        
    </div>
  )
}

export default Body