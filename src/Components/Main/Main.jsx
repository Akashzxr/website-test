import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux"
import ItemCard from "./Itemcard/ItemCard";

function Main() {
    let [i,seti]=useState(0);
    const {category,data} = useSelector((state)=>state.Data);
    const Mappingdata = data[0].table_menu_list[category].category_dishes;
    const id =  data[0].table_menu_list;
    const length = data[0].table_menu_list.lengh;
    

  return (
    <div>
       { id.map((items,index)=>{
         return(
            <div style={{display: index==category ? "block" : "none"}} key={index}>
            {items.category_dishes.map((dishes,dishindex)=>{
                return(
                    <ItemCard key={dishindex}  itemData={dishes}/>
                )
            })}</div>)
        })}
    </div>
  )
}

export default Main