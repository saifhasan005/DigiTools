import React, { useState } from 'react';
import { use } from 'react'
import AvailableData from './AvailableData';
import SelectedCard from './SelectedCard';

const CardData = ({ cardData, setCart, cart }) => {
    const cards = use(cardData);
    // console.log(data);
    const [selected, isselected] = useState("products")
    const [selectedCard, setSelectedCard] = useState([]);
    return (
        <div >
            <div className='max-w-[1500px] mt-[120px] mx-auto text-center'>
                <h1 className='font-bold text-[48px]'>Premium Digital Tools</h1>
                <p className='text-[#9da8b0]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className='mt-[16px]'>
                    <button onClick={() => isselected('products')} className={`text-white btn mr-5 ${selected === 'products' ? "bg-linear-to-r from-[#662df7] to-[#871bfa]" : "bg-red-500"}   rounded-full`}>Products</button>
                    <button onClick={() => isselected("cart")} className={`btn ${selected === 'cart' ? "bg-linear-to-r from-[#662df7] to-[#871bfa]" : "bg-red-500"} rounded-full text-white`}>Cart({cart})</button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-[1500px] gap-8'>

                {selected === "products" ? (
                    cards.map(card =>
                        <AvailableData setSelectedCard={setSelectedCard} card={card} key={card.id} selectedCard={selectedCard} setCart={setCart}></AvailableData>
                    )
                ) : (
                    <div className='col-span-1 md:col-span-2 lg:col-span-3'> 
                        <SelectedCard setCart={setCart} setSelectedCard={setSelectedCard} selectedCard={selectedCard}></SelectedCard></div>
                )}

            </div>
        </div>
    );
};

export default CardData;