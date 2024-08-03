import { Link } from "react-router-dom"
import banner from '../../assets/banner.png'
function SearchBanner() {
  return (
    <div className="bg-lightColor p-5  rounded-lg flex justify-between">
     <div className="flex flex-col justify-between">
     <h2 className="font-medium text-lg">I'm Looking for Massage Therapist Near...</h2>
       <p>In using this site, I agree to be bound by the <Link className="text-primaryColor underline">Terms of Service</Link> <br />  and  <Link className="text-primaryColor underline">Privacy Policy</Link></p>
       <div className="py-2 px-4 bg-lightGray rounded-lg  md:w-[470px] md:flex justify-between"><input type="text" placeholder="ZIP code or city name" />
       <button className ="bg-primaryColor px-6 text- rounded-lg py-1 text-lightGray ">Go</button>
       </div>
     </div>
     <div>
        <img src={banner} alt="" />
     </div>
    </div>
  )
}

export default SearchBanner
