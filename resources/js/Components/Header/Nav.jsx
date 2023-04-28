import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import Search from './Search';
import Account from '../Icons/Account';
import Cart from '../Icons/Cart';
import Wish from '../Icons/Wish';
import Menu from '../Icons/Menu';



const Nav = ({toggle}) => {
    return (
    <nav className='w-[1200px] tablet:w-[100%] mx-auto py-3 flex justify-between items-center z-10'>
        <Logo w={'50px'} h={'50px'}/>
        
        {/* <div className='tablet:hidden'>
            <Search/>
        </div> */}
        
        {/* card wish login */}
        <div className='flex space-x-5'>
            <Menu toggle={toggle}/>
            {/* <Wish/> */}
            {/* <Cart/> */}
            <Link className='flex-col' to='/login'><Account/><span className=''></span></Link>
            
        </div>
    </nav>
)
}

export default Nav;