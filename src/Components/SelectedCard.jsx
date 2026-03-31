import { FiBox, FiFileText, FiPenTool, FiTrendingUp, FiEdit3, FiCalendar, FiUsers, FiShoppingCart, FiVideo, FiBriefcase } from 'react-icons/fi';
import { toast } from 'react-toastify';

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

const SelectedCard = ({ selectedCard,setSelectedCard,setCart }) => {
    const total = selectedCard.reduce((sum, card) => sum + card.price, 0);
    const handleDelete = (card) => {
        toast.success(`${card.name} is deleted`);
        const filterCard = selectedCard.filter(carD=> card.name !=carD.name);
        setSelectedCard(filterCard);
        setCart(prev=>prev-1);

    };
    const checkoutPurcase = ()=>{
toast.success('All Payment Successful')
    }
    return (
        <div className='mt-6 border border-zinc-200 rounded-xl p-4 sm:p-6 w-full'>
            <p className='font-bold text-2xl sm:text-3xl mb-4'>Your Cart</p>
            {selectedCard.map((card, ind) => {
                const IconComponent = iconMap[card.icon];
                const { bg, color } = colorMap[card.icon] || { bg: "#F1EFE8", color: "#5F5E5A" };
                return (
                    <div key={ind} className='flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 mb-3'>
                        <div className='flex items-center gap-3'>
                            <div style={{ background: bg, color: color }}
                                className='w-10 h-10 rounded-xl flex items-center justify-center shrink-0'>
                                <IconComponent size={20} />
                            </div>
                            <div>
                                <p className='font-semibold text-sm'>{card.name}</p>
                                <p className='text-gray-400 text-xs'>${card.price}</p>
                            </div>
                        </div>
                        <button onClick={() => handleDelete(card)} className='text-red-400 text-sm hover:text-red-600 btn'>Remove</button>
                    </div>
                );
            })}
            <div className='flex justify-between mt-4 text-sm font-semibold px-1'>
                <p>Total</p>
                <p>${total}</p>
            </div>
            <button onClick={checkoutPurcase} className='w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-[#662df7] to-[#871bfa] text-white font-semibold text-sm'>
                Proceed To Checkout
            </button>
        </div>
    );
};

export default SelectedCard;