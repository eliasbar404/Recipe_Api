import * as React from 'react';
import { useForm } from "react-hook-form";
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import token from '../../Helpers/Token';
// import { fetchUser } from '@/Redux/Slices/authSlice';
import { useDispatch } from 'react-redux';
import { login } from '@/Redux/Slices/authSlice';
import Swal from 'sweetalert2'


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data )=> {
        
        // login(data)
        // console.log(data)

        // fetchUser();


            
        // axios.post('http://127.0.0.1:8000/api/auth/login',data).then( async(res)=>{
        //     // console.log(res.data.user)

        // }).catch((error)=>console.log(error))
        // // console.log(data)

        const res  =  await axios.post('http://127.0.0.1:8000/api/auth/login',data);
        await token("SET",res.data.access_token);
        // login success alert
        await Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your login  has been successed',
            showConfirmButton: false,
            timer: 2000
        })
        navigate('/');

    
    
    };

    return (
    <div  className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-[350px] p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-[#f97316] underline">
                Login
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
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
                <a
                    href="#"
                    className="text-xs text-[#f97316] hover:underline"
                >
                    Forget Password?
                </a>
                <div className="mt-6">
                    <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#ea580c] rounded-md hover:bg-[#c2410c] focus:outline-none focus:bg-[#c2410c]">
                        Login
                    </button>
                </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-700">
                {" "}
                Don't have an account?{" "}
                <Link
                    to="/register"
                    className="font-medium text-[#f97316] hover:underline"
                >
                    Sign up
                </Link>
            </p>
        </div>
    </div>
    )
}

export default Login;
