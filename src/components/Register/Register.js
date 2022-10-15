import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Register = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const { userEmail, userPassword } = data;
        console.log(userEmail, 'pass', userPassword)
    };

    return (
        <div className='h-[100vh] pt-8 bg-login-bg bg-cover'>
            <h1 className='text-6xl text-center mb-8'>Welcome to Project28</h1>
            <div className='w-1/3 mx-auto bg-slate-200 bg-opacity-25 border border-slate-500 rounded-md p-8'>
                <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='text-3xl font-semibold text-center'>Please Register !</h2>
                    <hr />
                    <label htmlFor="email" className='text-lg font-medium'>E-mail</label>
                    <input
                        {...register('userEmail')}
                        className='border border-slate-700 rounded-md py-2 pl-4'
                        type="email"
                        name="userEmail" id="email"
                    />

                    <label htmlFor="password" className='text-lg font-medium'>Password</label>
                    <input
                        {...register('userPassword')}
                        className='border border-slate-700 rounded-md py-2 pl-4'
                        type="password"
                        name="userPassword" id="password"
                    />
                    <Link to="/login" className='text-sm text-blue-600'>Already have an account ? Please Login!</Link>
                    {/* --- register button --- */}
                    <input className='text-xl text-white bg-slate-700 hover:bg-white hover:text-slate-800 duration-300 w-1/2 mx-auto mt-2 pt-1 pb-2 border-2 border-slate-700 rounded-lg' type="submit" value="Register" />
                </form>
                <GoogleLogin></GoogleLogin>
            </div>
            <div>
                <button
                    className='block text-xl text-white bg-slate-700 hover:bg-transparent hover:text-slate-800 duration-300 mx-auto mt-6 pt-1 pb-2 px-6 border-2 border-slate-700 rounded-lg'>
                    <Link to={'/'}>Back to Home</Link>
                </button>
            </div>
        </div>
    );
};

export default Register;