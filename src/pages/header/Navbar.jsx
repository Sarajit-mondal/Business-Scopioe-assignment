import { Link } from "react-router-dom"
import { FiUser } from "react-icons/fi";
import profileImage from '../../assets/profileImage.jpg'
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import { CiLogin } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
function Navbar() {
  const [dropDown,setDropDown] = useState(false)
  return (
   <nav className="flex justify-between items-center p-5 bg-lightColor">
    {/* left content */}
   <div className="flex items-center gap-5 ">
    <img src={profileImage} className="size-16 rounded-full" alt="" />
    <div>
        <h2 onClick={()=>setDropDown(!dropDown) } className="flex cursor-pointer justify-between font-semibold items-center gap-2">Name        <FaAngleDown className={`${dropDown && "rotate-180 ease-linear duration-300"}`}/></h2>
        {
          dropDown && <p>sarajitmandal01@gmail.com</p>
        }
    </div>
   </div>
   {/* right content */}
   <div className="flex items-center text-2xl gap-5">
     <span className="border rounded-full p-2"><IoIosNotificationsOutline/></span>
     <span className="flex items-center gap-2 cursor-pointer"><p className="font-semibold text-[18px] text-[#F15E4A]">Log Out</p> <span className="bg-[#FFECEA] p-2 rounded-full"><CiLogin className="text-[#F15E4A] font-semibold"/></span></span>
   </div>
   </nav>
  )
}

export default Navbar
