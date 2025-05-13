import React, { useState } from 'react'

const Home = () => {
    const [count, setCount] = useState(0)
    function increaseValue(){
        setCount(count + 1)
    }
    function decreaseValue(){
        setCount(count - 1)
    }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={increaseValue}>+</button>
    <button onClick={decreaseValue}>-</button>
    </>
  )
}

export default Home