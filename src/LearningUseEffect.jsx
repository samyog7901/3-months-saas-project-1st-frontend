import React, { useEffect, useState } from 'react'

const LearningUseEffect = () => {
    const [count, setCount] = useState(0)
    const inceaseValue = ()=>{
        setCount(count+1)   
    }
    const decreaseValue = ()=>{
        setCount(count-1)
    }

    useEffect(()=>{
        console.log("Radhe Radhe!")

    },[count])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={inceaseValue}>+</button>
        <button onClick={decreaseValue}>-</button>
    </div>
  )
}

export default LearningUseEffect