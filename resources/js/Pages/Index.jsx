import React from 'react';
import { Link} from "react-router-dom";

const Index = () => {
  return (
    <div className='font-bold'>index
      <Link to={'/login'}>to login</Link>
    </div>
  )
}

export default Index