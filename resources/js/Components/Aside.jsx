import React from 'react';
import { Link } from 'react-router-dom';
import Remove from './Icons/Remove';
import Search from './Header/Search';
import Account from './Icons/Account';

const Aside = ({toggle}) => {
    return (
    <div className='absolute top-0 bg-slate-100 w-full h-screen z-99 transition-all duration-1000'>

        <div className='bg-[#f97316] text-slate-200 flex justify-between p-4'>
            <div className='flex items-center space-x-2 ali'>
                <Account/>
                <Link to='/login' className='text-2xl'>Hello , Sign in</Link>
            </div>

            <div className=''>
                <Remove toggle={toggle}/>
            </div>
            
        </div>
        


        <div className='p-4'>
            <Search/>
        </div> 
        

        


    </div>
)
}

export default Aside