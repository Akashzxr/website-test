import "./Heading.css";
import {FaShoppingCart} from "react-icons/fa";
import { useSelector } from 'react-redux';



function Heading() {

  const  {data, itemcount}  = useSelector((state)=>state.Data);


  return (
    <div className="Heading-Container" >

        <h1 className="Restaurant-name" >{data[0].restaurant_name}</h1>

        <div className="myorders-cart-container" >
          
            <button className="My-Orders-btn" >My Orders</button>
            <FaShoppingCart className="Cart-Icon" />
            <span className="Cart-Count">{itemcount}</span>

        </div>

    </div>
  )
}

export default Heading