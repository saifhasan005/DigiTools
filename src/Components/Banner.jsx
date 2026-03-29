import React from 'react';
import img from '../../assets/Group 5.png'
import { CiPlay1 } from "react-icons/ci";
import banner from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='max-w-[1550px] justify-between flex flex-col sm:flex-row mx-auto'>
            <div className='left-side   mt-[177px] max-w-[640px]'>
                <div className='flex p-2 rounded-2xl w-[294px] gap-2 bg-[#e0e7ff] rounded'>
                    <img src={img} alt="" />
                    <p className='text-[#7f41fa] font-semibold'> New: AI-Powered Tools Available</p>
                </div>
                <h1 className='text-[72px] font-bold'>Supercharge Your <span className='text-purple-600'>Digital</span> Workflow</h1>
                <p className='text-[18px] text-[#768491]'>Access premium AI tools, design assets, templates, and <br /> productivity software—all in one place. Start creating faster today.Explore Products</p>
                <div className='flex gap-6 mt-[47px]'>
                    <button><a href="#" className='bg-linear-to-r from-[#662df7] to-[#871bfa] text-white py-[15px] px-[16px] rounded-full font-bold'>Explore Products</a></button>
                    <button>
                        <a href="#" className="hover:bg-purple-600 hover:text-white flex py-[13px] px-[18px] border font-bold rounded-full border-purple-500 text-purple-500 items-center gap-2">
                            <CiPlay1 /> Watch Demo
                        </a>
                    </button>
                </div>
            </div>
            <div className='right-side  mt-[85px]'>
                <img className='sm:h-[590px]' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;