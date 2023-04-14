import React from 'react';
import Nav from './Nav';
import Aside from '../Aside';

const Header = () => {
    const [toggle,setToggle] = React.useState(false);
    const AsideToggle = ()=>setToggle(!toggle);
    return (
    <header className='shadow-lg'>
            <Nav toggle={AsideToggle}/>
            {toggle && <Aside toggle={AsideToggle}/>}
            

    </header>
)
}

export default Header;