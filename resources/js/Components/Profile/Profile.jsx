import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




const Profile = () => {
    const user  = useSelector((state)=>state.auth.user);

    return (
    <div className='flex flex-col items-center p-6 gap-4'>
        <h2 className='flex justify-center font-bold text-6xl font-mono'>My Profile:</h2>
        {/* image profile */}
        <img className='rounded-full w-[150px] h-[150px]' src="data:image/png;base64,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" alt="" />
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


            <Link to="/profile/update" className='font-mono font-bold bg-sky-600 text-slate-50 text-2xl rounded-sm px-3 py-1 float-right mt-10'>Update</Link>


    </div>
)
}

export default Profile;