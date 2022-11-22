import "./Category.css";
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from "../../../State/DataSlice";

function Category() {
    const  {data, category}  = useSelector((state)=>state.Data);
    const Dispatch = useDispatch();
    const Mappingdata=data[0].table_menu_list;

    const onclick=(info)=>{
        Dispatch(setCategory(info));
        console.log(category)
    }

  return (
    <div className="Category-Container">

        {Mappingdata.map((category,index)=>{
                return(
                    <a href="#"
                     className="category" 
                     key={index} 
                     onClick={()=>{onclick(index)}}
                    >
                        {category.menu_category}
                    </a>
                )
        })}

    </div>
  )
}

export default Category