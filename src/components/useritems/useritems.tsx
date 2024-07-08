import React from 'react'

const UserItems = () => {
  return (
    <div className='flex items-center justify-between gap-2 border rounded-xl p-2'> 
        <div className="avatar rounded-full h-14 w-14 bg-blue-500 text-white font-bold flex justify-center items-center">
            <p>HW</p>
        </div>
       <div>
       <p className='font-bold text-lg'>Herlambang W</p>
        <p className='truncate text-xs text-neutral-500'>lambangws21@gmail.com</p>
       </div>
    </div>
  )
}

export default UserItems