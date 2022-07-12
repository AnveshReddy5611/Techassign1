import React from 'react'

const Child=(props) => {
  return (
    <div><h1>{props.state.toUpperCase()}</h1></div>
  )
}

export default Child