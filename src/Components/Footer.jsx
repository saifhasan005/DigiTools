import React from 'react';
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='bg-[#101626] text-white'>
            <div className='max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 pt-16 pb-10'>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10'>

                    {/* Brand — full width on mobile */}
                    <div className='col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-1'>
                        <h1 className='font-bold text-2xl tracking-tight'>DigiTools</h1>
                        <p className='text-gray-400 mt-3 text-sm leading-relaxed max-w-xs'>
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    <div>
                        <h4 className='font-semibold text-sm uppercase tracking-widest mb-4'>Product</h4>
                        <ul className='space-y-3'>
                            {['Features', 'Pricing', 'Template', 'Integrations'].map(item => (
                                <li key={item}>
                                    <a href="#" className='text-gray-400 text-sm hover:text-white transition-colors duration-200'>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className='font-semibold text-sm uppercase tracking-widest mb-4'>Company</h4>
                        <ul className='space-y-3'>
                            {['About', 'Blog', 'Careers', 'Press'].map(item => (
                                <li key={item}>
                                    <a href="#" className='text-gray-400 text-sm hover:text-white transition-colors duration-200'>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className='font-semibold text-sm uppercase tracking-widest mb-4'>Resources</h4>
                        <ul className='space-y-3'>
                            {['Documentation', 'Help Center', 'Community', 'Contact'].map(item => (
                                <li key={item}>
                                    <a href="#" className='text-gray-400 text-sm hover:text-white transition-colors duration-200'>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className='font-semibold text-sm uppercase tracking-widest mb-4'>Follow Us</h4>
                        <div className='flex gap-4'>
                            {[
                                { icon: <IoLogoInstagram size={20} />, href: "https://www.instagram.com/", label: 'Instagram' },
                                { icon: <FaFacebook size={20} />, href: "https://facebook.com/", label: 'Facebook' },
                                { icon: <FaXTwitter size={20} />, href: "https://x.com/", label: 'Twitter/X' },
                            ].map(({ icon, href, label }) => (
                                <a key={label} target='_blank' href={href} aria-label={label}
                                    className='text-gray-400 hover:text-white transition-colors duration-200'>
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500'>
                    <p>© {new Date().getFullYear()} DigiTools. All rights reserved.</p>
                    <div className='flex gap-5'>
                        <a href="#" className='hover:text-white transition-colors duration-200'>Privacy Policy</a>
                        <a href="#" className='hover:text-white transition-colors duration-200'>Terms of Service</a>
                        <a href="#" className='hover:text-white transition-colors duration-200'>Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;