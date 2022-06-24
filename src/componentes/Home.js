import React from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Home = () => {
  const count = useSelector((state) => state.counter.value)
  return (
    <>
      <div className='App'>
        <div>Home</div>
        <p>The most important this is that </p>
        <p>Counter is: {count}</p>
        <Link to='/'>
          <p>Go Back</p>
        </Link>
      </div>
    </>
  )
}
