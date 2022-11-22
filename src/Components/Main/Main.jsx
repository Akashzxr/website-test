import { useSelector } from "react-redux"
import ItemCard from "./Itemcard/ItemCard";

function Main() {
    const {category,data} = useSelector((state)=>state.Data);
    const Mappingdata = data[0].table_menu_list[category].category_dishes;

  return (
    <div>
       {Mappingdata.map((items,index)=>{
                return(
                    <ItemCard key={index}  itemData={items}/>
                )
        })}
    </div>
  )
}

export default Main