import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Cart = () => {
    const [cart,setCart] = React.useState(1);
    return (
    <div className='relative cursor-pointer'>
        <ShoppingCartOutlinedIcon fontSize='large'/>
        {
            cart && (<span className='absolute left-6 top-[-6px] bg-[#f97316] rounded-full px-2 font-bold text-slate-50'>{cart}</span>)
        }
        
    </div>
)
}

export default Cart