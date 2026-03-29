import React from 'react';
import { use } from 'react'
import AvailableData from './AvailableData';

const CardData = ({ cardData }) => {
    const cards = use(cardData);
    // console.log(data);
    return (
        <div >
            <div className='max-w-[1500px] mt-[120px] mx-auto text-center'>
                <h1 className='font-bold text-[48px]'>Premium Digital Tools</h1>
                <p className='text-[#9da8b0]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className='mt-[16px]'>
                    <button className='btn mr-5 bg-linear-to-r from-[#662df7] to-[#871bfa] rounded-full'>Products</button>
                    <button className='btn rounded-full'>Cart(0)</button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-[1500px] gap-8'>
                {
                    cards.map(card =>
                        <AvailableData card={card}></AvailableData>
                    )
                }
            </div>
        </div>
    );
};

export default CardData;