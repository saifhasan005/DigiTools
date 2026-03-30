import React from 'react';
import Cards from './Cards';

const Blocked = () => {
    return (
        <div className='max-w-[1500px] mx-auto mt-[150px]'>
            <div className='text-center'>
                <h1 className='font-bold text-[48px] '>Get Started in 3 Steps</h1>
                <p className='text-gray-500'>Start Using premium digital tools in minutes, not hours.</p>
            </div>
            {/* Card section */}
            <Cards></Cards>

        </div>
    );
};

export default Blocked;