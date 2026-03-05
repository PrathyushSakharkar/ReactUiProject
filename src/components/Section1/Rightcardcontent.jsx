import React from 'react'
import {MoveRight} from 'lucide-react'
const Rightcardcontent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
            <h3 className='h-12 w-12 rounded-full text-2xl bg-white flex items-center justify-center'>{props.id+1}</h3>
            <div>
                <p className='text-xl leading-normal text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, cumque! Eligendi accusamus amet soluta aspernatur.</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className='text-white font-medium  px-8 py-2 rounded-2xl'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}}className='font-medium  px-3 py-2 rounded-full'><MoveRight /></button>
                </div>
            </div>
        </div>
  )
}

export default Rightcardcontent
