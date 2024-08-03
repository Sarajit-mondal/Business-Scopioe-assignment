import React from 'react'
import { FiUsers } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import { TiHomeOutline } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { MdEventNote } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
function SideLinks() {
  return (
    <div className='[&>.active]:bg-seconderyColor
            [&>.active]:border-l-2 [&>.active]:font-semibold'>
         {/* Home */}
         <NavLink to="/" className='flex w-full items-center px-4 py-2 mt-5'>
                    <TiHomeOutline className='w-5 h-5' />

                    <span className='mx-4'> Home</span>
        </NavLink>
         {/* New Listing */}
         <NavLink to="/newListing" className='flex w-full items-center px-4 py-2 mt-5'>
                    <FiUsers className='w-5 h-5' />

                    <span className='mx-4'> New Listing</span>
        </NavLink>
         {/* search */}
         <NavLink to="/search" className='flex w-full items-center px-4 py-2 mt-5'>
                    <CiSearch className='w-5 h-5' />

                    <span className='mx-4'> Search</span>
        </NavLink>
         {/* About */}
         <NavLink to="/about" className='flex w-full items-center px-4 py-2 mt-5'>
                    <MdEventNote className='w-5 h-5' />

                    <span className='mx-4'>About</span>
        </NavLink>
         {/* Favorites */}
         <NavLink to="/Favorites" className='flex w-full items-center px-4 py-2 mt-5'>
                    <FaRegHeart className='w-5 h-5' />

                    <span className='mx-4'>Favorites</span>
        </NavLink>
       
         <hr className='px-4 py-2 mt-5'/>
          {/* help Center */}
          <NavLink to="/helpCenter" className='flex w-full items-center px-4 py-2 '>
                    <IoMdHelpCircleOutline className='w-5 h-5' />

                    <span className='mx-4'>Help Center</span>
        </NavLink>
          {/* Setting */}
          <NavLink to="/helpCenter" className='flex w-full items-center px-4 py-2 mt-5'>
                    <IoMdSettings className='w-5 h-5' />

                    <span className='mx-4'>Setting</span>
        </NavLink>
    </div>
  )
}

export default SideLinks
