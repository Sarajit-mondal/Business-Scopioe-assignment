import { Link } from "react-router-dom"
import { FiUser } from "react-icons/fi";
import profileImage from '../../assets/profileImage.jpg'
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
function Navbar() {
  const [dropDown,setDropDown] = useState(false)
  return (
   <nav className="flex justify-between items-center py-5 bg-lightColor">
   <div className="flex items-center gap-5 ">
    <img src={profileImage} className="size-16 rounded-full" alt="" />
    <div>
        <h2 onClick={()=>setDropDown(!dropDown) } className="flex justify-between font-semibold items-center gap-2">Name        <FaAngleDown className={`${dropDown && "rotate-180 ease-linear duration-300"}`}/></h2>
        {
          dropDown && <p>sarajitmandal01@gmail.com</p>
        }
    </div>
   </div>
   </nav>
  )
}

export default Navbar
