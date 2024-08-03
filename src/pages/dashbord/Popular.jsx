import { list } from 'postcss'
import React from 'react'
const clients = [
    "New York",
    "Los Angeles",
    "San Francisco",
    "Hong Kong",
    "Rio Janeiro",
    "Buenos Aires",
    "Mexico City",
    "Cape Town",
    "Las Vegas",
    "Abu Dhabi",
    "Tel Aviv",
    "Saint Petersbu",
    "Kuala Lumpur",
    "Rio Grande",
    "San Diego",
    "Santa Fe",
    "Sao Paulo",
    "New Delhi",
    "San Juan",
    "Puerto Rico",
    "Buenos Aires"
  ]
  
function Popular() {
  return (
    <div className='bg-lightColor py-4 rounded-lg'>
      <ul className='grid grid-cols-3'>
      {
        clients.map((name,inx) => <span>
          <li key={inx} className='underline px-5 text-primaryColor'>{name}</li>
          <hr  className='my-3 bg-backgroundColor border-0 h-[1px]'/>
        </span>)
       }
      </ul>
    </div>
  )
}

export default Popular
