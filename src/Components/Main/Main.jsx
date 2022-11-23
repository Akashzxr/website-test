import { useSelector } from "react-redux"
import ItemCard from "./Itemcard/ItemCard";

function Main() {

    const {category,data} = useSelector((state)=>state.Data);
    const Mappingdata = data[0].table_menu_list;

    

  return (
    <div>
       { Mappingdata.map((items,index)=>{
             return(
                   <div style={{display: index===category ? "block" : "none"}} key={index}>
  
                         {items.category_dishes.map((dishes,dishindex)=>{
                             return(
                                 <ItemCard key={dishindex}  itemData={dishes}/>
                             )
                            })
                         }
                         
                   </div>
               )
           })
        }
    </div>
  )
}

export default Main