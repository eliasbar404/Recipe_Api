import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const Menu = ({toggle}) => {
    return (
    <div className='cursor-pointer hidden tablet:block' onClick={toggle}>
        <MenuIcon fontSize='large'/>     
    </div>
)
}

export default Menu