import { useState } from 'react'



import { AiOutlineBars } from 'react-icons/ai'

import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import SideLinks from './SideLinks'

const Sidebar = () => {
    const [isActive, setActive] = useState(true)
  
    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }

    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 w-full z-50 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer w-full p-4 font-bold'>
                        <Link to='/'>
                            {/* <img
                // className='hidden md:block'
                src={logo}
                alt='logo'
                width='200'
                height='100'
              /> */}

                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div className='   bg-lightColor h-full'>
                {/* logo */}
                <h2 className='pt-11 text-4xl font-extrabold text-primaryColor text-center '>B-S</h2>
             
              
              {/* all sideLinks */}
              <SideLinks />
            </div>
        </>
    )
}

export default Sidebar