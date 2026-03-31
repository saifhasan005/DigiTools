import React from 'react';
import img from '../../assets/Group 5.png';
import { CiPlay1 } from "react-icons/ci";
import banner from '../../assets/banner.png';

const Banner = () => {
    return (
        <div className='max-w-[1550px] pt-24 mx-auto px-4 sm:px-6  flex flex-col sm:flex-row items-center justify-between gap-10'>
            <div className='mt-16 sm:mt-[177px] max-w-[640px] text-center sm:text-left'>
                <div className='inline-flex items-center p-2 rounded-2xl gap-2 bg-[#e0e7ff]'>
                    <img src={img} alt="" />
                    <p className='text-[#7f41fa] font-semibold text-sm'>New: AI-Powered Tools Available</p>
                </div>
                <h1 className='text-4xl sm:text-5xl lg:text-[72px] font-bold mt-4 leading-tight'>
                    Supercharge Your <span className='text-purple-600'>Digital</span> Workflow
                </h1>
                <p className='text-sm sm:text-[18px] text-[#768491] mt-4'>
                    Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                </p>
                <div className='flex flex-col sm:flex-row items-center gap-4 mt-10 justify-center sm:justify-start'>
                    <a href="#" className='bg-gradient-to-r from-[#662df7] to-[#871bfa] text-white py-3 px-6 rounded-full font-bold text-sm'>
                        Explore Products
                    </a>
                    <a href="#" className='active:bg-purple-600 active:text-white hover:bg-purple-600 hover:text-white flex items-center gap-2 py-3 px-6 border font-bold rounded-full border-purple-500 text-purple-500 text-sm transition-colors duration-200'>
                        <CiPlay1 /> Watch Demo
                    </a>
                </div>
            </div>
            <div className='w-full sm:w-auto flex justify-center'>
                <img className='w-full max-w-[500px] sm:h-[590px] sm:max-w-none object-contain' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;