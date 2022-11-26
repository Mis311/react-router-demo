import React from 'react'
import { useNavigate } from 'react-router-dom'
const OrderSummary = () => {
const goBack= useNavigate()
  return (
    <>
    <div>Order confirmed</div>
    <button onClick={()=> goBack(-1)}>Go back</button>

</>
  )
}

export default OrderSummary