import React from 'react';
import one from './Images/1.png';
import two from './Images/2.png';
import three from './Images/3.png';
import four from './Images/4.png';
import five from './Images/ic_search.png';
import six from './Images/flag.png';
import seven from './Images/img.png';
import user from './Images/ic_user_group.png'
import notification from './Images/ic_notifications.png'
import blue from './Images/blue.png'
import green from './Images/green.png'
import tb from './Images/tb.png'
import Chart from './Chart';

const Sidebar = () => {
  return (
  
    <div className="flex">
      <div className="w-80 bg-white h-screen shadow-lg">
        <div className="text-center p-4">
          <div className="flex">
            <div className="text-blue-600 text-3xl font-lexend break-words border border-blue-600 font-bold pl-2 pr-2">
              TEXLA
            </div>
            <div className="text-blue-600 text-3xl font-lexend font-bold break-words ml-2">
              CULTURE
            </div>
          </div>
        </div>
        <div className="pt-5 px-5">
          <div className="text-gray-600 text-xs font-public-sans font-bold uppercase leading-5 break-words">
            General
          </div>
          <div className='flex pt-5 bg-blue-600 bg-opacity-10 rounded-lg pb-2'>
            <div className='pr-7'> <img src={one} alt='one'/> </div>
            <div className="text-blue-600 text-base font-public-sans font-semibold leading-6 break-words">
              Dashboard
            </div>
            <div className="ml-auto">
              <img src={two} alt='two'/>
            </div>
          </div>
          <div className='flex pt-5 pl-2'>
            <div> <img className='pr-5' src={three} alt='one'/> </div>
            <div className="text-gray-600 text-base font-public-sans font-normal leading-6 break-words">
              Companies
            </div>
            <div className="ml-auto">
              <img src={four} alt='two'/>
            </div>
          </div>
          <div className='flex pt-5 pl-2'>
            <div> <img className=' pr-5' src={three} alt='one'/> </div>
            <div className="text-gray-600 text-base font-public-sans font-normal leading-6 break-words">
              Support & Tickets
            </div>
            <div className="ml-auto">
              <img src={four} alt='two'/>
            </div>
          </div>
          <div className='flex pt-5 pl-2 '>
            <div> <img className=' pr-5' src={three} alt='one'/> </div>
            <div className="text-gray-600 text-base font-public-sans font-normal leading-6 break-words">
              User Admins
            </div>
            <div className="ml-auto">
              <img src={four} alt='two'/>
            </div>
          </div>
        </div>
      </div>
      <div className="w-64 p-4">
        <div className="flex items-center space-x-2 mb-4 ">
          <img src={five} alt='five'></img>
          <div>
            {/* Icons */}
            <div className="w-64 p-4 absolute top-0 right-0">
              <div className="flex items-center space-x-2 mb-4">
                <div>
                  <div className="flex space-x-2">
                    <img className="h-8" alt="flag" src={six} />
                    <img className="h-8" alt="notify" src={notification} />
                    <img className="h-8" alt="people" src={user} />
                    <img className="h-8" alt="user" src={seven} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="ml-5 mt-14">Client Management</div>
        <div className='flex '>
        <div className="ml-5 mt-2 pr-3">
  <span className="border-b-2 border-green-500 pb-2">Dashboard</span>
</div>
        <div className="  ml-5 mt-2 pr-3 "> ClientDetails </div>
        </div>
        <div className='flex flex-row space-x-14 mt-10 ml-5 '>
         <div className='pr-80'>KeyPerformanceIndicator</div>
         <div className='pr-48'>CompanyStatus</div>
         <div>ActiveUserBase</div>
</div>

        <div className='flex flex-row space-x-14 mt-10  '>
       <div className='ml-9 mt-3'>ClientRetentionRate</div>
       <div className='ml-8 mt-3'>ClientSatisfaction</div>      
       <div className='ml-8 mt-3'>RevenueGenerator</div>     
       
       <div className='pl-10 mt-3'>Total</div> 
       <div className='ml-14 mt-3'>Active</div> 
       <div className='ml-14 mt-3'>New</div> 
      
      
       <div className='ml-14 mt-3'>89%AppUser</div>
      
      
      
       <div className='ml-14 mt-3'>13%WebUser</div> 
       
             
       
       
     

      
       

        


       </div>
       <div className='flex flex-row  mt-5  '>
       <div className='ml-20 mt-2 mr-24 text-blue-800 text-2xl'>55%</div>


       <div className='ml-20 mt-2 text-blue-500 text-2xl'>55%</div>
       <div className='ml-20 mt-2 text-green-800 text-2xl'>55%</div>
       <div className='ml-44 mt-2  text-blue-800 text-2xl'>20</div>
       <div className='ml-20 mt-2  text-green-800 text-2xl'>15</div>
       <div className='ml-16 mt-3  text-blue-500 text-2xl '>3</div>
       </div>

       <div className='flex flex-row  mt-10  '>
       <div className='ml-14 mt-3'>OnboardCompanies</div>
       
       <div className='ml-96 pl-48 mt-3'>Regionalmetrices
       
      
       </div>
       </div>

       <div className='flex flex-row space-x-14 mt-10  '>
       <div className='ml-14 mt-3 flex border border-gray-300 px-10'>All <img src={two}/></div>

<div className='ml-14 mt-3 flex border border-gray-300 px-36' ><img src={five}/>Search</div>

       </div>
      <div className=''>
       <div className="flex pr-5   ">
  <div className="ml-7 mt-3 ">companyName</div>
  <div className="ml-10 mt-3 ">Onboardingdata</div>
  <div className="ml-5 mt-3 "> Golivedata</div>
  <div className="ml-5 mt-3 "> TotalUserbase</div>
  <div className="ml-5 mt-3"> Lastbilling</div>
  <div className="ml-5 mt-3 " > Status</div>


</div>
</div>

<div className='flex  mt-5'>
  <br/>
  <img className='pl-5' src={tb} alt='tablex'/>
  <div className='pl-3 bg-blue-100 w-full'>Texlaculture
  <div>  INV-17048</div></div>
 
  <div className='pl-6 mt-4 '>12Jan2022</div>
<div  className='pl-16 mt-4 pr-3'>07Aug2022</div>
<div  className='pl-2 mt-4 pr-3'>224</div>
<div  className='pl-11 mt-4 pr-3'>07Aug2022</div>
<div className='pl-4 mt-4 pr-4 bg-green-300 rounded-full text-center'>Active</div>


</div>
<div className='flex  mt-5'>
  <br/>
  <img className='pl-5' src={tb} alt='tablex'/>
  <div className='pl-3 bg-green-100 w-full'>Texlaculture
  <div>  INV-17048</div></div>
 
  <div className='pl-6 mt-4 '>12Jan2022</div>
<div  className='pl-16 mt-4 pr-3'>07Aug2022</div>
<div  className='pl-2 mt-4 pr-3'>224</div>
<div  className='pl-11 mt-4 pr-3'>07Aug2022</div>
<div className='pl-4 mt-4 pr-4 bg-green-300 rounded-full text-center'>Active</div>
</div>
<div className='flex  mt-5'>
  <br/>
  <img className='pl-5' src={tb} alt='tablex'/>
  <div className='pl-3 bg-orange-100 w-full'>Texlaculture
  <div>  INV-17048</div></div>
 
  <div className='pl-6 mt-4 '>12Jan2022</div>
<div  className='pl-16 mt-4 pr-3'>07Aug2022</div>
<div  className='pl-2 mt-4 pr-3'>224</div>
<div  className='pl-11 mt-4 pr-3'>07Aug2022</div>
<div className='pl-4 mt-4 pr-4 bg-gray-300 rounded-full text-center'>Draft</div>
</div>




       
      </div >
      
      <Chart/>
     
      </div>


 
    
   

 )
};

export default Sidebar;
