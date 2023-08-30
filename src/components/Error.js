import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const err = useRouteError()
    console.log(err)
  return (
    <div className='error'>
      <h1>please use valid path</h1>
      <h2>{err.data}</h2>
      <h2>{err.status}</h2>
    </div>
  )
}

export default Error
