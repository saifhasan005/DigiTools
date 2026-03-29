import React from 'react';

const Users = () => {
    return (
        <div className='mt-[85px] bg-linear-to-r from-[#662df7] to-[#871bfa]'>
            <section className='max-w-[1550px] text-white py-[60px] gap-[40px] md:gap-[55px] mx-auto flex flex-col sm:flex-row justify-center text-center px-6'>

                <div className='border-b-2 sm:border-b-0 sm:border-r-2 border-gray-400 pb-8 sm:pb-0'>
                    <p className='text-[40px] md:text-[50px] font-bold px-10'>50K+</p>
                    <p className='text-gray-300'>Active Users</p>
                </div>

                <div className='border-b-2 sm:border-b-0 sm:border-r-2 border-gray-400 pb-8 sm:pb-0'>
                    <p className='text-[40px] md:text-[50px] font-bold px-10'>200+</p>
                    <p className='text-gray-300'>Premium Tools</p>
                </div>

                <div>
                    <p className='text-[40px] md:text-[50px] font-bold px-10'>4.9</p>
                    <p className='text-gray-300'>Rating</p>
                </div>

            </section>
        </div>
    );
};

export default Users;