import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




const Profile = () => {
    const user  = useSelector((state)=>state.auth.user);

    return (
    <div className='flex flex-col items-center p-6 gap-4'>
        <h2 className='flex justify-center font-bold text-6xl font-mono'>My Profile:</h2>
        {/* image profile */}
        <img className='rounded-full w-[150px] h-[150px]' src={`http://127.0.0.1:8000/uploads/${user.image}`} alt="" />
        {/* First Name */}
        <div className='flex flex-col gap-2'>
            <label htmlFor="" className='text-xl'>First Name:</label>
            <input className='w-[300px] p-2 rounded-sm' type="text" name="" id="" value={user.first_name} disabled/>
        </div>
        {/* Last Name */}
        <div className='flex flex-col gap-2'>
            <label htmlFor="" className='text-xl'>Last Name:</label>
            <input className='w-[300px] p-2 rounded-sm' type="text" name="" id="" value={user.last_name} disabled/>
        </div>
        {/* Email */}
        <div className='flex flex-col gap-2'>
            <label htmlFor="" className='text-xl'>Email:</label>
            <input className='w-[300px] p-2 rounded-sm' type="text" name="" id="" value={user.email} disabled/>
        </div>
        {/* profile */}
        <div className='flex flex-col gap-2'>
            <label htmlFor="" className='text-xl'>Profile:</label>
            <textarea className='w-[500px] p-2 rounded-sm' name="" id="" cols="30" rows="10" value={user.profile} disabled></textarea>
            {/* <input type="text" name="" id="" value={user.email} disabled/> */}
        </div>


            <Link to="/user/profile/update" className='font-mono font-bold bg-sky-600 text-slate-50 text-2xl rounded-sm px-3 py-1 float-right mt-10'>Update</Link>


    </div>
)
}

export default Profile;