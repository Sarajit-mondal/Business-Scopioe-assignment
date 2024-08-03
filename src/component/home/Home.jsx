import React from 'react'
import SearchBanner from './SearchBanner'
import FeaturedTherapist from './FeaturedTherapist'


function Home() {
  console.log("two")
  return (
   
    <div>
       <div> <SearchBanner /></div>
       <div>
            <FeaturedTherapist />
       </div>
    </div>
  )
}

export default Home
