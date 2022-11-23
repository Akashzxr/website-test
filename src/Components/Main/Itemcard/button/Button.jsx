import "./Button.css";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../../../State/DataSlice";
import { useState } from "react";

function Button() {
  let [count,setcount] = useState(0);
  const Dispatch = useDispatch();
 
 
 const Countincrement=()=>{
    Dispatch(increment())
    setcount(count+=1);
 }
 
 const Countdecrement=()=>{
  if(count===0){
    setcount(0);
  }else{
    setcount(count-=1);
    Dispatch(decrement())
  }
}

  return (
    <div className="button-container">
       <button onClick={Countdecrement}>-</button>
        <span>{count}</span>
       <button onClick={Countincrement}>+</button>
    </div>
  )
}

export default Button