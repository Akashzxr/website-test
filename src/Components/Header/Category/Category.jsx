import "./Category.css";
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from "../../../State/DataSlice";
import { useEffect } from "react";

function Category() {
    const  {data, category}  = useSelector((state)=>state.Data);
    const Dispatch = useDispatch();
    const Mappingdata=data[0].table_menu_list;

    const onclick=(info)=>{
        Dispatch(setCategory(info));
        console.log(category)
    }

    useEffect(()=>{

    },[category])

  return (
    <div className="Category-Container">

        {Mappingdata.map((items,index)=>{
                return(
                    <a href="#"
                     style={ {color: category===index ? "red" : "grey",
                              borderColor: category===index ? "red" : "grey" 
                            }}
                     className="category" 
                     key={index} 
                     onClick={()=>{onclick(index)}}
                    >
                        {items.menu_category}
                    </a>
                )
        })}

    </div>
  )
}

export default Category