import React from 'react'
import Featured from './Featured'

function FeaturedAndPopular() {
  return (
    <div className='flex items-center justify-between gap-10'>
        {/* Featured */}
        <div className=' w-full basis-2/4'>
        <Featured />
        </div>
        {/* popular */}
        <div className='bg-primaryColor w-full basis-2/4'>b</div>
    </div>
  )
}

export default FeaturedAndPopular
