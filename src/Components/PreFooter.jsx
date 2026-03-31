import React from 'react';

const PreFooter = () => {
    return (
        <div className='bg-gradient-to-r from-[#662df7] to-[#871bfa] py-16 sm:py-20 md:py-[120px] mt-16 sm:mt-20 md:mt-[120px] text-center px-4 sm:px-6'>
            <p className='font-bold text-white text-2xl sm:text-3xl md:text-4xl leading-snug'>
                Ready To Transform Your Workflow
            </p>
            <p className='text-gray-300 mb-8 mt-3 text-sm sm:text-base max-w-xl mx-auto'>
                Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-3'>
                <button className='w-full sm:w-auto px-6 py-3 bg-white text-purple-700 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200'>
                    Explore Products
                </button>
                <button className='w-full sm:w-auto px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-200'>
                    View Pricing
                </button>
            </div>
            <p className='text-gray-300 mt-4 text-xs sm:text-sm'>
                14-day free trial • No credit card required • Cancel anytime
            </p>
        </div>
    );
};

export default PreFooter;