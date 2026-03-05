import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageContent = (props) => {
  
  
  return (
    <div className='flex justify-between pb-16 pt-6 items-stretch gap-10 h-[calc(100vh-80px)]'>
      <LeftContent/>
      <RightContent users = {props.users}/>
    </div>
  )
}

export default PageContent
