import React from 'react'
import Featured from './Featured'
import Popular from './Popular'

function FeaturedAndPopular() {
  return (
    <div className='flex items-center justify-between gap-10'>
        {/* Featured */}
        <div className='h-[430px] w-full basis-2/4'>
        <Featured />
        </div>
        {/* popular */}
        <div className='h-[430px] w-full basis-2/4'>
        <Popular />
        </div>
    </div>
  )
}

export default FeaturedAndPopular
