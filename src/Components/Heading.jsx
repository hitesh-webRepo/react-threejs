import React from 'react'

const Heading = ({text,className}) => {
  return (
    <h1 className={`  font-bold ${className}`}>{text}</h1>
  )
}

export default Heading


Heading.defaultProps= {
  className:" text-white text-5xl"
}