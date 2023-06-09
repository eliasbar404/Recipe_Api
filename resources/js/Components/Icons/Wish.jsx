import React from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Wish = () => {
    const [wish,setWish] = React.useState(1);
    const user_id  = useSelector((state)=>state.auth.user.id);
    const [recipes,setRecipes] = React.useState([]);
    
    React.useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/fav/'+user_id).then((res)=>{
            setRecipes(res.data)
        })
    }, [])
    return (
    <Link to="/favourite" className='relative cursor-pointer'>
        <FavoriteBorderOutlinedIcon fontSize='large' className='text-black'/>
        {
            wish && (<span className='absolute left-6 top-[-6px] bg-[#f97316] rounded-full px-2 font-bold text-slate-50'>{recipes.length}</span>)
        }
        
    </Link>
)
}

export default Wish