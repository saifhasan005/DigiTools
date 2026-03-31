import React from 'react';

const PreFooter = () => {
    return (
        <div className='bg-linear-to-r py-[120px] mt-[120px] from-[#662df7] to-[#871bfa] max-w-[1500px] mx-auto text-center '>
            <p className='font-bold text-white text-4xl'>Ready To Transform Your Workflow</p>
            <p className='text-gray-400 mb-[40px] mt-3'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today</p>
            <button className='btn  text-purple-700 rounded-full'>Explore Products</button>
            <button className='btn rounded-full ml-[15px] bg-transparent border-white text-white'>View Pricing</button>
            <p className='text-gray-400 mt-[16px]'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default PreFooter;