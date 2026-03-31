import React, { useState } from 'react';
import { FiBox, FiFileText, FiPenTool, FiTrendingUp, FiEdit3, FiCalendar, FiUsers, FiShoppingCart, FiVideo, FiBriefcase } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
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



const AvailableData = ({ card, setCart, selectedCard, setSelectedCard }) => {
    const handleBuy = () => {
         const isFoundCart = selectedCard.find(item=> item.id ===card.id)
            if(isFoundCart){
                toast.error(`${card.name} already add to cart`)
                return;
            }
        toast.success(`${card.name} is add to cart`);
        setCart(prevCart => prevCart + 1);
        setSelectedCard([...selectedCard, card]);
        setBuy(true);
    }
    const IconComponent = iconMap[card.icon];
    const { bg, color } = colorMap[card.icon] || { bg: "#F1EFE8", color: "#5F5E5A" };

    const [buy, setBuy] = useState(false);
    return (
        <div className='mt-10'>
            <div className='border rounded-xl p-4'>
                <div className='flex justify-between'>
                    <div style={{ background: bg, color: color }}
                        className='w-12 h-12 rounded-xl flex items-center justify-center shrink-0'>
                        <IconComponent size={24} />
                    </div>
                    <p className={
                        card.tagType === 'best seller' ? "bg-yellow-500 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap h-fit" :
                            card.tagType === 'popular' ? "bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap h-fit" :
                                card.tagType === 'new' ? "bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap h-fit" :
                                    "bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs h-fit"
                    }>{card.tag}</p>
                </div>
                <p className='font-bold text-xl sm:text-2xl mt-4'>{card.name}</p>
                <p className='mt-3 text-gray-400 text-sm'>{card.description}</p>
                <p className='mt-3'><span className='font-bold text-xl sm:text-[22px]'>${card.price}</span><span className='font-semibold text-gray-500'>/Mo</span></p>
                <ul className='mt-3 space-y-1'>
                    {card.features.map((feature, index) => (
                        <li className='text-sm' key={index}>✓ {feature}</li>
                    ))}
                </ul>
                <button disabled={buy} onClick={handleBuy} className='bg-gradient-to-r from-[#662df7] to-[#871bfa] w-full mt-4 rounded-xl py-3 text-white font-semibold text-sm disabled:opacity-60'>
                    {buy ? "Confirmed" : "Buy Now"}
                </button>
            </div>
        </div>
    );
};

export default AvailableData;