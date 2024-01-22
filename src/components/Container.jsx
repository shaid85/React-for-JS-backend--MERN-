import React from 'react'

function Container({children}) {
  return (
    <div className='py-8 w-full max-w-7xl mx-auto px-4'>
        {children}
    </div>
  )
}

export default Container