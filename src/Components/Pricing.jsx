import React from 'react';
import PricingCard from './PricingCard';

const Pricing = () => {
    return (
        <div className='max-w-[1500px] mx-auto'>
            <div className='mt-[120px] text-center'>
                <h1 className='font-bold text-3xl'>Simple, Transparent Pricing</h1>
                <p className='text-gray-500 mt-[16px]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            {/* Pricing card section */}
            <PricingCard></PricingCard>
        </div>
    );
};

export default Pricing;