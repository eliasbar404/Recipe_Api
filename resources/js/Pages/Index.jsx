import React from 'react';
import { Link ,Outlet} from "react-router-dom";
import Header from '../Components/Header/Header';
import Footer from '@/Components/Footer';
import { useSelector,useDispatch } from 'react-redux';
import token from '../Helpers/Token';
// import { fetchUser } from '@/Redux/Slices/authSlice';
import { login } from '@/Redux/Slices/authSlice';


const Index = () => {
  // const user = useSelector((state)=>state.auth.user)

  const dispatch = useDispatch();
  React.useEffect(() => {

    if(localStorage.getItem('token')){
      axios.get('http://127.0.0.1:8000/api/auth/user-profile',{headers: {'Authorization': `Bearer ${token("GET")}`}}).then((res)=>dispatch(login(res.data)));
    }

  }, [])
  
  return (
    <div className='font-bold'>
      <Header/>
      <Outlet/>
      <hr className='mt-20 w-[90vw] mx-auto'/>
      <Footer/>
    </div>
  )
}

export default Index;