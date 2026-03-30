import React from 'react';
import userImg from '../../assets/user.png'
import blockImg from '../../assets/package.png'
import rocket from '../../assets/rocket.png'

const Cards = () => {
    const cards = [
        { img: userImg, title: 'Create Account', desc: 'Sign up for free in seconds. No credit card required to get started.',point:'01' },
        { img: blockImg, title: 'Choose Products', desc: 'Browse our catalog and select the tools that fit your needs.',point: '02' },
        { img: rocket, title: 'Start Creating', desc: 'Download and start using your premium tools immediately.',point: '03' },
        
    ];

    return (
        <div className='mt-[40px] flex flex-col md:grid md:grid-cols-3 items-center gap-[30px]'>
            {cards.map((card, i) => (
                <div key={i} className='rounded-xl shadow-xl border-zinc-300 w-full max-w-[340px] py-[50px] px-[22px] text-center border flex flex-col items-center'>
                    <p className='mb-[14px] btn border rounded-full py-2 bg-purple-500 text-white px-3'>{card.point}</p>
                    <img src={card.img} alt={card.title}/>
                    <h2 className='font-bold text-xl'>{card.title}</h2>
                    <p className='text-gray-500'>{card.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default Cards;