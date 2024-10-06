// import React from 'react'

import { useState } from "react"

export const CounterApp = () => {
    const [count, setCount] = useState(0)
    const handleIncrement = () => {
        if(count<99){
            setCount((count)=>count+1)
        }
    }
    const handleDecrement = () => {
        if(count>0){
            setCount((count)=>count-1)  
        }      
    }
    const reset = () => {
        setCount(0)     
    }
  return (
    <div className="couter-app-section">
        <div className="container mx-auto flex justify-center">
          <div className="counter-app-wrap">
            <h2 className="text-center capitalize text-indigo-900 font-bold text-4xl pb-4 pt-20">counter app</h2>
            <div className="counter-app-content flex justify-center items-end gap-5 pt-5">
                <a href="#" onClick={handleIncrement} className="py-2 px-4 bg-indigo-950 inline-block rounded-md">
                    <i className="fa-solid fa-plus text-white font-semibold"></i>
                </a>
                <p className="font-semibold text-indigo-950 text-9xl w-36 text-center">{count}</p>
                <a href="#" onClick={handleDecrement} disabled={count<=0} className="py-2 px-4 bg-indigo-950 inline-block rounded-md">
                    <i className="fa-solid fa-minus text-white font-semibold"></i>
                </a>
            </div>
            <h3 onClick={reset} className="capitalize text-center text-2xl font-semibold cursor-pointer pt-5">reset</h3>
          </div>
        </div>
    </div>
  )
}
