import React from 'react'

const Container = ({children}) => {
  return (
    <div className='mx-auto container p-5'>{children}</div>
  )
}

export default Container