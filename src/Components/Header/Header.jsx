import Heading from "./Heading/Heading";
import Category from "./Category/Category";
import "./Header.css";

function Header() {
  return (
    <div className="Header-Container">
        <Heading/>
        <Category/>
    </div>
  )
}

export default Header