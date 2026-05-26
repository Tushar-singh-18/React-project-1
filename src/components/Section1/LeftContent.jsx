import React from 'react'
import { RiArrowRightUpLine } from '@remixicon/react'
import Hero from './Hero';
import arrow from './Arrow'

const LeftContent = () => {
    return (
        <div className='h-full w-1/3 flex flex-col justify-between'>
            <Hero />
            <arrow />
        </div>
    )
}

export default LeftContent;