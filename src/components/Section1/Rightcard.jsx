import React from 'react'
import Rightcardcontent from './Rightcardcontent'


const Rightcard = (props) => {
  return (
    <div id='right'className='h-full w-80 overflow-hidden shrink-0 relative rounded-4xl '>
      <img className='h-full w-full object-cover' src={props.img} alt=''></img>
        <Rightcardcontent id={props.id} tag={props.tag} color={props.color}/>
    </div>
  )
}

export default Rightcard
