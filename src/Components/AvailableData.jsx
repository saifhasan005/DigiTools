import React from 'react';
import { FiBox, FiFileText, FiPenTool, FiTrendingUp, FiEdit3, FiCalendar, FiUsers, FiShoppingCart, FiVideo, FiBriefcase } from 'react-icons/fi';
const iconMap = {
    FiBox, FiFileText, FiPenTool, FiTrendingUp, FiEdit3,
    FiCalendar, FiUsers, FiShoppingCart, FiVideo, FiBriefcase,
};

const colorMap = {
    FiBox: { bg: "#EAF3DE", color: "#3B6D11" },
    FiFileText: { bg: "#EEEDFE", color: "#534AB7" },
    FiPenTool: { bg: "#FBEAF0", color: "#993556" },
    FiTrendingUp: { bg: "#E1F5EE", color: "#0F6E56" },
    FiEdit3: { bg: "#EEEDFE", color: "#534AB7" },
    FiCalendar: { bg: "#FAEEDA", color: "#854F0B" },
    FiUsers: { bg: "#E6F1FB", color: "#185FA5" },
    FiShoppingCart: { bg: "#FAECE7", color: "#993C1D" },
    FiVideo: { bg: "#FBEAF0", color: "#72243E" },
    FiBriefcase: { bg: "#F1EFE8", color: "#5F5E5A" },
};

const AvailableData = ({ card }) => {
    const IconComponent = iconMap[card.icon];
    const { bg, color } = colorMap[card.icon] || { bg: "#F1EFE8", color: "#5F5E5A" };
    return (
        <div className='mt-[40px] '>
            <div className='border rounded-xl p-4'>
                <div className='flex justify-between'>
                    <div style={{ background: bg, color: color }}
                        className='w-12 h-12 rounded-xl flex items-center justify-center'>
                        <IconComponent size={24} />
                    </div>
                    <p className={
                        card.tagType === 'best seller' ? "bg-yellow-500 text-yellow-800 px-5 py-3 rounded-full text-xs font-medium whitespace-nowrap" :
                            card.tagType === 'popular' ? "bg-purple-100 text-purple-700 px-5 py-3 rounded-full text-xs font-medium whitespace-nowrap" :
                                card.tagType === 'new' ? "bg-green-100 text-green-800 px-5 py-3 rounded-full text-xs font-medium whitespace-nowrap" :
                                    "bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm"
                    }>{card.tag}</p>
                </div>
                <p className='font-bold text-2xl mt-[16px]'>{card.name}</p>
                <p className='mt-[16px] text-gray-400'>{card.description}</p>
                <p className='mt-[16px]'><span className='font-bold text-[22px]'>${card.price}</span><span className='font-semibold text-gray-300'>/Mo</span></p>
                <ul className='mt-[16px]'>
                    {card.features.map((feature, index) => (
                        <li className='mb-[6px]' key={index}>✓ {feature}</li>
                    ))}
                </ul>
                <button className='btn w-full mt-[16px] rounded-xl  text-white bg-linear-to-r from-[#662df7] to-[#871bfa]'>Buy Now</button>
            </div>

        </div>
    );
};

export default AvailableData;