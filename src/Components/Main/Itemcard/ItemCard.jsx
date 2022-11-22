import { useEffect, useState } from "react";
import Button from "./button/Button";
import "./ItemCard.css";

function ItemCard(props) {

    const item = props.itemData;
    const [dishtypecolor,setcolor] = useState('');

    useEffect(()=>{
        if(item.dish_Type===1){
            setcolor("red");
        }else{
            setcolor("green");
        }
    },[item.dish_Type])

  return (
    
    <div className="ItemCard" >

         <div className="Item-Details-Container">

            <div style={{borderColor:`${dishtypecolor}`}} className="veg-nonveg-symbol">
               <div style={{backgroundColor:`${dishtypecolor}`}} className="circle"/>
            </div>

            <div className="Item-Details">
               <h4>{item.dish_name}</h4>
               <h5>{item.dish_currency} {item.dish_price}</h5>
               <div>{item.dish_description}</div>

               {item.dish_Availability ? <Button/> : <div className="message">Not available</div>}
                

                {item.addonCat.length!=0 
                  ? <span className="message">customization available</span>
                  : null
                }
            </div>

         </div>

         <div className="Calorie-Image-Container">
            <div>{item.dish_calories} calories</div>
            <img className="Dish-Image" src={item.dish_image} alt={item.dish_name} />
         </div>

    </div>
  )
}

export default ItemCard