import React, { useState } from 'react';
import { FaCartArrowDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinks = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

    return (
        <div className='bg-white w-full sticky top-0 z-50 shadow-lg'>
            <div className='flex items-center px-6 py-3 justify-between'>
                <h1 className="text-[25px] sm:text-[40px] font-bold bg-gradient-to-r from-[#612ff7] to-[#8d19fa] bg-clip-text text-transparent">DigiTools</h1>

                <div className='hidden md:flex gap-3'>
                    {navLinks.map(link => (
                        <button key={link}><a href="#" className='text-[#234c75] font-semibold text-[18px]'>{link}</a></button>
                    ))}
                </div>

                <div className='flex justify-center items-center gap-[18px]'>
                    <button className='items-center flex justify-center'><FaCartArrowDown />(0)</button>
                    <button className='hidden md:block btn rounded-full'>Login</button>
                    <button className='hidden md:block btn rounded-full px-10 bg-linear-to-r from-[#642ff7] to-[#9016fa] text-white'>Get Started</button>
                    <button className='md:hidden text-[22px] text-[#234c75]' onClick={() => setMenuOpen(p => !p)}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className='md:hidden px-6 py-4 flex flex-col gap-3 border-t border-gray-100'>
                    {navLinks.map(link => (
                        <a key={link} href="#" className='text-[#234c75] font-semibold text-[16px]' onClick={() => setMenuOpen(false)}>{link}</a>
                    ))}
                    <div className='flex gap-3 mt-1'>
                        <button className='flex-1 btn rounded-full'>Login</button>
                        <button className='flex-1 btn rounded-full bg-linear-to-r from-[#642ff7] to-[#9016fa] text-white'>Get Started</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;