import React from 'react'
import {MoveUpRight} from 'lucide-react'
const LeftContent = () => {
  return (
    <div className=' h-full flex flex-col justify-between w-1/3 p-6'>
      <div className='p-6'>
        <h3 className='text-6xl font-bold mb-7'>Prospective 
            <br/><span className='text-gray-600'>Customer</span>
            <br/>
             Segmentation</h3>
        <p className='text-xl font-medium text-black'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur exercitationem cum veniam sint numquam incidunt enim nesciunt sunt, dolore et? Debitis mollitia voluptas atque, dolorem voluptates natus voluptate iusto repellat!</p>
      </div>
      <div>
        <MoveUpRight size={80} />
      </div>
    </div>
  )
}

export default LeftContent
