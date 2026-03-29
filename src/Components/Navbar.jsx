import React from 'react';

const Navbar = () => {
    return (
        
        < div className = 'sticky top-0 z-50 flex mt-[10px] shadow-lg mx-auto pb-[10px]  justify-around' >
            <div>
                <h1 className="text-[40px] font-bold bg-gradient-to-r from-[#612ff7] to-[#8d19fa] bg-clip-text text-transparent">DigiTools</h1>
            </div>
            <div className='hidden md:flex gap-3'>
                <button><a href="#" className='text-[#234c75] font-semibold text-[18px]'>Products</a></button>
                <button><a href="#" className='text-[#234c75] font-semibold text-[18px]'>Features</a></button>
                <button><a href="#" className='text-[#234c75] font-semibold text-[18px]'>Pricing</a></button>
                <button><a href="#" className='text-[#234c75] font-semibold text-[18px]'>Testimonials</a></button>
                <button><a href="#" className='text-[#234c75] font-semibold text-[18px]'>FAQ</a></button>
            </div>
            <div className='flex justify-center items-center gap-[18px]'>
                <button className='btn rounded-full'>Login</button>
                <button className='btn rounded-full px-10  bg-linear-to-r from-[#642ff7] to-[#9016fa] text-white'>Get Started</button>     
            </div>
        </div >



    );
};

export default Navbar;