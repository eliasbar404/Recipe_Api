import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({w,h}) => {
    return (
    <Link to='/'>
        <img width={w} height={h}  src="https://store-images.s-microsoft.com/image/apps.60540.9007199266535063.245c7148-fb8f-402e-8bd6-9c5a6e2abfd5.2703f910-d16a-4490-a10e-04981a702872" alt="logo"  />
    </Link>
    
)
}

export default Logo;