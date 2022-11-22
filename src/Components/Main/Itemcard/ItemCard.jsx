import { useEffect, useState } from "react";
import Button from "./button/Button";
import "./ItemCard.css";

function ItemCard(props) {

    const item = props.itemData;
    const [dishtypecolor,setcolor] = useState('');
    
    const name        = item.dish_name;
    const currency    = item.dish_currency;
    const price       = item.dish_price;
    const description = item.dish_description;
    const available   = item.dish_Availability;
    const length      = item.addonCat.length;
    const calories    = item.dish_calories;
    const image       = item.dish_image;
    const id          = item.dish_id;

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
                 <h4>{name}</h4>
                 <h5>{currency} {price}</h5>
                 <div>{description}</div>
  
                 {available ? <Button /> : <div className="message">Not available</div>}
                  
                  {length!=0 
                    ? <span className="message">customization available</span>
                    : null
                  }
              </div>

         </div>

         <div className="Calorie-Image-Container">
            <div>{calories} calories</div>
            <img className="Dish-Image" src={image} alt={name} />
         </div>

    </div>
  )
}

export default ItemCard