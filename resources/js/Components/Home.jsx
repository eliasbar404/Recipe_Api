import React from 'react';
import CategoriesBar from './CategoriesBar';
import RecipesList from './RecipesList';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Modal from '@mui/material/Modal';

import { set_Category, set_On, set_Title } from '@/Redux/Slices/searchSlice';
import { set_Pre_time_min,set_Pre_time_max ,set_Difficulty ,set_Rating,set_Origin} from '@/Redux/Slices/searchSlice';



import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 950,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius:2,
};

const Home = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
    const handleClose = () => setOpen(!open);

    const search = useSelector((state)=>state.search);

    const [title,setTitle] = React.useState("");

    return (
    <div>
        {/* Advanved Search */}
        {/* --------------- */}
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
                <h1 className='font-black text-5xl'>Search By:</h1>
                <div className='flex flex-col gap-4 mt-10'>
                {/* Time */}
                <div className='flex items-center gap-5'>
                    <label htmlFor="" className='font-semibold text-2xl'>Preparing Time Between:</label>
                    <input type="number" name="" id="" placeholder='Time per minutes...' value={search.pre_time_min} onChange={(e)=>dispatch(set_Pre_time_min(e.target.value))}/>
                    <label htmlFor="" className='font-semibold text-2xl'>And:</label>
                    <input type="number" name="" id="" placeholder='Time per minutes...' value={search.pre_time_max} onChange={(e)=>dispatch(set_Pre_time_max(e.target.value))}/>
                </div>
                {/* Difficulty */}
                <div className='flex items-center gap-10'>
                    <label htmlFor="" className='font-semibold text-2xl'>Difficulty:</label>
                    <select name="" id="" value={search.difficulty} onChange={(e)=>dispatch(set_Difficulty(e.target.value))}>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                {/* Origin */}
                <div className='flex items-center gap-10'>
                    <label htmlFor="" className='font-semibold text-2xl'>Origin:</label>
                    <input type="text" name="" id="" placeholder='' value={search.origin} onChange={(e)=>dispatch(set_Origin(e.target.value))}/>
                </div>
                {/* Rating */}
                <div className='flex items-center gap-10'>
                    <label htmlFor="" className='font-semibold text-2xl'>Rating:</label>
                    <Rating name="size-large"  defaultValue={search.rating} size="large" onChange={(e)=>dispatch(set_Rating(e.target.value))}/>
                </div>

                </div>

                {/* Search */}
                <button className='bg-orange-500 ml-1 text-slate-50 font-extrabold px-10 py-1 text-xl rounded-sm mt-5 float-right'
                onClick={(e)=>{
                    dispatch(set_On(true))
                    handleClose()
                }}>Search</button>
                {/* Remove */}
                <button className='bg-red-500 text-slate-50 font-extrabold px-10 py-1 text-xl rounded-sm mt-5 float-right'
                onClick={(e)=>{
                    dispatch(set_On(false))
                    dispatch(set_Title(""))
                    dispatch(set_Difficulty(""))
                    dispatch(set_Pre_time_max(""))
                    dispatch(set_Pre_time_min(""))
                    dispatch(set_Origin(""))
                    dispatch(set_Category(""))
                    dispatch(set_Rating(0))
                    // window.location.reload()
                }}>Remove</button>
            </Box>
        </Modal>


        <div className='p-1 relative'>
            <img className='w-[1250px] h-[600px] mx-auto brightness-125' src="https://img.freepik.com/free-photo/copy-space-italian-food-ingredients_23-2148551732.jpg" alt="" />
            <div className='absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[50%] space-x-3'>
                <input onChange={(e)=>{
                    dispatch(set_On(true))
                    dispatch(set_Title(e.target.value))
                }} value={search.title} type="text" name="" id="" className='w-[400px] py-2 rounded-md' placeholder='What do you wanna cook today....'/>
                <button onClick={handleOpen} className='bg-orange-500 py-2 px-10 rounded-md font-extrabold text-slate-50'>Advance Search</button>
            </div>
            
            <CategoriesBar/>
        </div>

        <RecipesList/>
    </div>
)
}

export default Home;