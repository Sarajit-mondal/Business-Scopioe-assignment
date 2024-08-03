import React from 'react'

import { Outlet } from 'react-router-dom'
import Sidebar from '../../pages/dashbord/Sidebar'
import Navbar from '../../pages/header/Navbar'
import FeaturedTherapist from '../../component/home/FeaturedTherapist'

function Dashboard() {
  return (
 <div className='w-full bg-backgroundColor'>
     <div className=' w-[1280px] mx-auto px-1'>
     <div className='flex min-h-full '>
      <div>
       <Sidebar />
      </div>
      <div className='flex-1'>
       <div >
       <Navbar /> 

        <div className='m-6'><Outlet></Outlet></div>
       </div>
      </div>
    </div>
   </div>
 </div>
  )
}

export default Dashboard
