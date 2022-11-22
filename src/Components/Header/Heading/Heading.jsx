import "./Heading.css";
import {FaShoppingCart} from "react-icons/fa";

function Heading() {
  return (
    <div className="Heading-Container" >

        <h1 className="Restaurant-name" >UNI Resto Cafe</h1>
        <div className="myorders-cart-container" >

            <button className="My-Orders-btn" >My Orders</button>
            <FaShoppingCart className="Cart-Icon" />
            <span className="Cart-Count">0</span>

        </div>

    </div>
  )
}

export default Heading