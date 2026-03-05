import React from 'react'
import Rightcard from './Rightcard'

const RightContent = (props) => {
  return (
    <div className=' h-full p-4 w-2/3 flex flex-nowrap gap-8 overflow-x-auto rounded-4xl'>
      {props.users.map(function name(elem, idx) {
        return <Rightcard key={idx} color= {elem.color} id={idx} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent
