import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const Navigate = useNavigate()
 
  return (
    <>
    <div>Home
    <button onClick={() => Navigate('order-summary')}>Place order</button></div>
    
    </>
  )
}

export default Home