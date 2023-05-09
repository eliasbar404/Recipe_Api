import * as React from 'react';
import { useForm } from "react-hook-form";
import { Link ,useNavigate} from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import axios from 'axios';
import Swal from 'sweetalert2'


const Register = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
            
        axios.post('http://127.0.0.1:8000/api/auth/register',data)
        .then(async(res)=>{
            if(res.data.message){
                await Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'You are registered successefully',
                    showConfirmButton: false,
                    timer: 2000
                })
                await navigate('/login');
            }
        })
        .catch((error)=>console.log(error))
        // console.log(data)
    
    };

    return (
    <div  className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-[350px] p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-[#f97316] underline">
            Register now
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                {/* first name */}
                <div className="mb-2">
                    <label
                        htmlFor="first_name"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        First Name
                    </label>
                    <input
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register("first_name", { required: true })}
                    />
                </div>
                {/* last name */}
                <div className="mb-2">
                    <label
                        htmlFor="last_name"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Last Name
                    </label>
                    <input
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register("last_name", { required: true })}
                    />
                </div>
                {/* email */}
                <div className="mb-2">
                    <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register("email", { required: true })}
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="password"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register("password", { required: true })}
                    />
                </div>
                {/* Confirmation Password */}
                <div className="mb-2">
                    <label
                        htmlFor="password_confirmation"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Password Confirmation
                    </label>
                    <input
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register("password_confirmation", { required: true })}
                    />
                </div>
                {/* Terms */}
                <div className="mb-2">

                    <Checkbox {...register("terms", { required: true })} {...label} className="after:content-['I agree to Conditions of Use and Privacy Notice.']"/>
                    <span className='font-bold'>I agree to Conditions of Use and Privacy Notice.</span>
                </div>

                <div className="mt-6">
                    <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#f97316] rounded-md hover:bg-[#c2410c] focus:outline-none focus:bg-purple-600">
                        Register
                    </button>
                </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-700">
                {" "}
                Do you have an account?{" "}
                <Link
                    to="/login"
                    className="font-medium text-[#f97316] hover:underline"
                >
                    Login
                </Link>
            </p>
        </div>
    </div>
    )
}

export default Register;
