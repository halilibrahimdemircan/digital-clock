import React from 'react'


const Seperator = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      {[1,2].map((i, index) => (
          <span key={index} className="text-4xl font-extrabold rounded-full w-2 h-2 bg-white"></span>
      ))}
      </div>
  )
}

export default Seperator