import React from 'react';
import { Link ,Outlet} from "react-router-dom";
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
    //   console.log(res.data.name)
      dispatch(login(res.data))
    
  )


  }, [])
  
  const name = useSelector((state)=>state.auth.user.name)
  return (
    <div className='font-bold'>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Index;