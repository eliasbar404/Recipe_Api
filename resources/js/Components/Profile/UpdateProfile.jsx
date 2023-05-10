import React from 'react';
import FormControl from '@mui/joy/FormControl';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import token from '@/Helpers/Token';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const navigate = useNavigate();
    const user  = useSelector((state)=>state.auth.user);
    const [file, setFile] = React.useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    }
    const form = useForm({
        defaultValues:{
            id:user.id,
            first_name:user.first_name,
            last_name:user.last_name,
            email:user.email,
            gender:"",
            profile:user.profile,
            image:"",
            new_password:""
        }
    })

    const { register,handleSubmit, watch, formState: { errors } } = form;
    const onSubmit = data =>{

        
        axios.post('http://127.0.0.1:8000/api/user',{...data,image:file},{headers: {'Authorization': `Bearer ${token("GET")}`,'Content-Type': 'multipart/form-data'}}).then(
            async (res)=>{

                if(res.data){
                    await Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Update your profile successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })

                    navigate('/profile');

                }


            } 
        )


    } 
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='p-16 mt-10 w-[1000px] mx-auto'>
        <h2 className='flex justify-center font-bold text-6xl font-mono'>Update Profile:</h2>
        {/* first col */}
        <div className='flex justify-between mt-16'>
            {/* First Name */}
            <div className='flex flex-col gap-2'>
                <label htmlFor="" className='font-bold text-xl'>First Name:</label>
                <input type="text" className='border w-[300px] rounded-sm'  {...register("first_name", { required: true })}/>
            </div>
            {/* last Name */}
            <div className='flex flex-col gap-2'>
                <label htmlFor="" className='font-bold text-xl'>Last Name:</label>
                <input type="text" className='border w-[300px] rounded-sm'  {...register("last_name", { required: true })}/>
            </div>
        </div>
        {/* second col */}
        {/* Email */}
        <div className='flex flex-col gap-2 mt-6'>
            <label htmlFor="" className='font-bold text-xl'>Email:</label>
            <input type="email" className='border w-[500px] rounded-sm'  {...register("email", { required: true })}/>
        </div>
        {/* third col */}
        {/* Profile */}
        <div className='flex flex-col gap-2 mt-6'>
            <label htmlFor="" className='font-bold text-xl'>Profile:</label>
            <textarea className='border w-[500px] rounded-sm resize-none' name="" id="" cols="30" rows="5"  {...register("profile", { required: true })}></textarea>
        </div>

        {/* 4 col */}
        {/* gender */}
        <div className='mt-6'>
        <FormControl>
            {/* <FormLabel sx={}>Gender:</FormLabel> */}
            <label htmlFor="" className='font-bold text-xl'>Gender:</label>
            <RadioGroup defaultValue="Male" name="radio-buttons-group" >
                <Radio value="Male"   label="Male" variant="outlined"  {...register("gender", { required: true })}/>
                <Radio value="Female" label="Female" variant="outlined" {...register("gender", { required: true })} />
            </RadioGroup>
        </FormControl>
        </div>
        {/* 5 col */}
        {/* profile Image */}
        <div className="flex items-center space-x-6 mt-6">
            <label htmlFor="" className='font-bold text-xl'>Profile Photo:</label>
            <div className="shrink-0">
                <img className="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
            </div>
            <div className="flex">
                <input type="file" onChange={handleFileChange} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"/>
            </div>
        </div>
        {/* 6 col */}
        {/* New password */}
        <div className='flex flex-col gap-3 mt-6'>
            <label htmlFor="" className='font-bold text-xl'>New Password:</label>
            <input type="text" name="" id="" className='border w-[500px] rounded-sm' {...register("new_password", { required: true })}/>
        </div>





        <input type='submit' value="Save" className='font-mono font-bold bg-green-500 text-slate-50 text-2xl rounded-sm px-3 py-1 float-right mt-10' />


    </form>
)
}

export default UpdateProfile