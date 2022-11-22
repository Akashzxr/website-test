import "./Button.css";
import { useDispatch,useSelector } from "react-redux";
import { increment, decrement } from "../../../../State/DataSlice";
import { useState } from "react";

function Button() {
  
 const Dispatch = useDispatch();
 
 
 const Countincrement=()=>{
    Dispatch(increment())
 }
 const Countdecrement=()=>{
  Dispatch(decrement())
}

  return (
    <div className="button-container">
       <button onClick={Countdecrement}>-</button>
        <span>0</span>
       <button onClick={Countincrement}>+</button>
    </div>
  )
}

export default Button