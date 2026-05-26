import React from 'react'
import RightContent from './RightContent';
import LeftContent from './LeftContent';

const Page1content = (props) => {
  return (
     <div className='flex items-center gap-10 py-10 px-10 h-[90vh]'>
        <LeftContent />
        <RightContent  user = {props.user}/> 
     </div>
  )
}

export default Page1content;