import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { set_Category ,set_On} from '@/Redux/Slices/searchSlice';

const CategoriesBar = () => {
    const dispatch = useDispatch();
    const [categories,setCategories] = React.useState([]);
    const [category,setCategory]     = React.useState("");
    React.useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/categories').then((res)=>setCategories(res.data))
        }, []);
    return (
    <div className='flex flex-wrap w-[900px] gap-1 justify-center absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[50%]'>
        {
            categories.map((val,key)=>(
                <button onClick={(e)=>{
                    dispatch(set_On(true))
                    dispatch(set_Category(val.id))
                    setCategory(e.target.value)
                }} value={val.name} className={val.name == category?'border-2 border-orange-500 rounded-md p-1 bg-orange-500 text-slate-50':'bg-slate-50 font-extrabold text-orange-500 border-2 border-orange-500 rounded-md p-1 hover:bg-orange-500 hover:text-slate-50'}>{val.name}</button>
            ))
        }
    </div>
)
}
export default CategoriesBar;