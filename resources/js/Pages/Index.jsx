import React from 'react';
import { Link} from "react-router-dom";
import Header from '../Components/Header/Header';
import { useSelector,useDispatch } from 'react-redux';
import token from '../Helpers/Token'
// import { fetchUser } from '@/Redux/Slices/authSlice';
import { login } from '@/Redux/Slices/authSlice';
const Index = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    // dispatch(fetchUser())
    axios.get('http://127.0.0.1:8000/api/auth/user-profile',{headers: {'Authorization': `Bearer ${token("GET")}`}}).then(
      (res)=> 
      // console.log(res.data.name)
      dispatch(login(res.data.name))
    
  )
  }, [])
  
  const name = useSelector((state)=>state.auth.user.name)
  return (
    <div className='font-bold h-[2000px]'>
      <Header/>
      <div>{name}</div>
      {/* {name && <div>{name}</div>} */}
      {/* <div>{name}</div> */}
      {/* <div className='z-1'>
        <div className='relative'> */}
                  {/* <div style={{backgroundImage:"url('https://www.allrecipes.com/thmb/S3QRPeIXd1ME0L48YZRXHHr7lZU=/1500x2000/filters:no_upscale():max_bytes(150000):strip_icc()/2400-240708-broccoli-and-chicken-stir-fry-3x4-186-b7f290a400134ae9910f2e67ff50d9f2.jpg')"}} className="brightness-50 max-w-[1300px] m-auto h-auto bg-no-repeat bg-right-top"></div> */}
        {/* <img className='brightness-50 m-auto w-full max-w-[1300px] h-auto phone:h-[200px]'  src="https://www.allrecipes.com/thmb/S3QRPeIXd1ME0L48YZRXHHr7lZU=/1500x2000/filters:no_upscale():max_bytes(150000):strip_icc()/2400-240708-broccoli-and-chicken-stir-fry-3x4-186-b7f290a400134ae9910f2e67ff50d9f2.jpg" alt="" />
        <p className='text-orange-500 text-lg sm:text-sm font-mono font-black absolute top-0 brightness-100 mx-5 text-center'>Search for what do you wanna cock today!</p>

        </div>

      </div> */}

      
      {/* <Link to={'/login'}>to login</Link> */}
    </div>
  )
}

export default Index;