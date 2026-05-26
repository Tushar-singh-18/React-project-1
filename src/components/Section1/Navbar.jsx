import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-6 px-16'>
        <h4 className='bg-black text-white uppercase px-6 py-2 rounded-full tracking-wider'>Target Audience</h4>
        <button className='bg-gray-400 text-black text-sm uppercase px-6 py-2 rounded-full tracking-wider'>Digital banking platform</button>
    </div>
  )
}

export default Navbar;