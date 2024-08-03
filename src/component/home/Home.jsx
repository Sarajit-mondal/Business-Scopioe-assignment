import React from 'react'
import SearchBanner from './SearchBanner'
import FeaturedTherapist from './FeaturedTherapist'
import FeaturedAndPopular from '../../pages/dashbord/FeaturedAndPopular'


function Home() {
  console.log("two")
  return (
   
    <div>
       <div> <SearchBanner /></div>
       <div>
            <FeaturedTherapist />
       </div>
       <FeaturedAndPopular />
    </div>
  )
}

export default Home
