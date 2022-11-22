import "./Category.css";
import { useSelector } from 'react-redux';

function Category() {

    const  {data}  = useSelector((state)=>state.Data);

  return (
    <div className="Category-Container">

        {data[0].table_menu_list.map((category)=>{
                return(
                    <a href="#" className="category">
                        {category.menu_category}
                    </a>
                )
        })}

    </div>
  )
}

export default Category