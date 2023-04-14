import React from 'react';
import { Link} from "react-router-dom";
import Header from '../Components/Header/Header';

const Index = () => {
  return (
    <div className='font-bold h-[2000px]'>
      <Header/>
      
      {/* <Link to={'/login'}>to login</Link> */}
    </div>
  )
}

export default Index