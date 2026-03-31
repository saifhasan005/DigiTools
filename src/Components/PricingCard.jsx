import React from 'react';

const PricingCard = () => {
    // console.log(cards);
    return (
        <div className='grid grid-cols-3  gap-[30px] mt-[40px]'>
            <div className='border shadow-xl border-zinc-200 p-4 w-[380px] rounded-lg'>
                <p className='font-bold text-3xl'>Starter</p>
                <p className='text-gray-500 mb-[24px]'>Perfect for getting started</p>
                <p><span className='font-bold text-3xl'>$0</span><span className='text-gray-500'>/Month</span></p>
                <ul className='mt-[24px]'>
                    <li className='text-gray-500'>✔Access to free tools</li>
                    <li className='text-gray-500'>✔Basic Templates</li>
                    <li className='text-gray-500'>✔Community Support</li>
                    <li className='text-gray-500'>✔1 Project per month</li>
                </ul>
                <button className='text-white rounded-2xl mt-[104px] w-full btn bg-linear-to-r from-[#662df7] to-[#871bfa]'>Get Started Free</button>
            </div>
            <div className='border text-white bg-linear-to-r from-[#662df7] to-[#871bfa] shadow-xl border-zinc-200 p-4 w-[380px] rounded-lg'>
                <div className='flex justify-between items-center'>
                    <p className='font-bold text-3xl'>Pro</p>
                    <p className='bg-[#fff4c7] font-semibold p-1 rounded-full  text-[#db9f63]'>Most Popular</p>
                </div>
                <p className=' mb-[24px]'>Best for Professionals</p>
                <p><span className='font-bold text-3xl'>$29</span><span>/Month</span></p>
                <ul className='mt-[24px]'>
                    <li>✔Access to all premium tools</li>
                    <li>Unlimited Templates</li>
                    <li>✔Priority Support</li>
                    <li>✔Unlimited Project</li>
                    <li>✔Cloud Sync</li>
                    <li>✔Advanced analytics</li>
                </ul>
                <button className=' rounded-2xl mt-[64px] w-full btn bg-white text-[#871bfa]'>Start Pro Trial</button>
            </div>
            <div className='border shadow-xl border-zinc-200 p-4 w-[380px] rounded-lg'>
                <p className='font-bold text-3xl'>Enterprise</p>
                <p className='text-gray-500 mb-[24px]'>For teams and business</p>
                <p><span className='font-bold text-3xl'>$99</span><span className='text-gray-500'>/Month</span></p>
                <ul className='mt-[24px]'>
                    <li className='text-gray-500'>✔Everything in Pro</li>
                    <li className='text-gray-500'>✔Team Collaboration</li>
                    <li className='text-gray-500'>✔Custom Integration</li>
                    <li className='text-gray-500'>✔Dedicated Support</li>
                    <li className='text-gray-500'>✔SLA Guarantee</li>
                    <li className='text-gray-500'>✔Custom Branding</li>
                </ul>
                <button className='text-white rounded-2xl mt-[64px] w-full btn bg-linear-to-r from-[#662df7] to-[#871bfa]'>Contact Sales</button>
            </div>
        </div>
    );
};

export default PricingCard;