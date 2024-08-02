import React from 'react'

import { Outlet } from 'react-router-dom'
import Sidebar from '../../pages/dashbord/Sidebar'
import Navbar from '../../pages/header/Navbar'

function Dashboard() {
  return (
 <div className='w-full bg-backgroundColor'>
     <div className=' w-[1280px] mx-auto'>
     
     <div className='flex min-h-screen '>
      <div>
       <Sidebar />
      </div>
      <div className='flex-1'>
       <div >
       <Navbar /> 
        <div className='pl-5'><Outlet></Outlet></div>
       </div>
      </div>
    </div>
   </div>
 </div>
  )
}

export default Dashboard
