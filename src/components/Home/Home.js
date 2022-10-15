import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex items-center justify-center h-[100vh] bg-home-bg bg-cover '>
            <div className='w-3/5 text-white'>
                <h1 className='text-6xl font-bold text-center mb-8'>Welcome to Project28</h1>
                <h1 className='text-2xl text-center'>
                    Want to draw your creativity using online tool ?
                </h1>
                <h1 className='text-xl text-center'>
                    Just click the button below and get started...
                </h1>
                <button
                    className='block text-2xl text-white bg-slate-700 hover:bg-transparent duration-300 mx-auto mt-6 pt-1 pb-2 px-6 border-2 border-slate-700 rounded-lg'>
                    <Link to={'/login'}>Get Started!</Link>
                </button>
            </div>
        </div>
    );
};

export default Home;