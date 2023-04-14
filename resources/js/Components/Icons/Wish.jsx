import React from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Wish = () => {
    const [wish,setWish] = React.useState(1);
    return (
    <div className='relative cursor-pointer'>
        <FavoriteBorderOutlinedIcon fontSize='large'/>
        {
            wish && (<span className='absolute left-6 top-[-6px] bg-[#f97316] rounded-full px-2 font-bold text-slate-50'>{wish}</span>)
        }
        
    </div>
)
}

export default Wish