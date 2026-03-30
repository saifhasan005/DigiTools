import React from 'react';

const PricingCard = () => {
    const cards= [
        {title: 'Starter', des: 'Perfect for getting started', price: '$0', pricE: '/Month', li1: 'Access to 10 free tools', li2: 'Basic template', li3:'Community support',li4:'1 Project per month',btn:'Get Started Free' },
        {title: 'Pro', des: 'Best for Professionals', price: '$29', pricE: '/Month', li1: 'Access to all premium tools', li2: 'Unlimited template', li3:'Priority support',li4:'Unlimited month',btn:'Start Pro Trial' },
        {title: 'Enterprise', des: 'For teams and business', price: '$99', pricE: '/Month', li1: 'Everything in Pro', li2: 'Team collaboration', li3:'Custom integration',li4:'Dedicated Support', li5:'SLA gurantee',li6: 'Custom branding', btn:'Get Started Free' },
    ]
    // console.log(cards);
    return (
        <div className='grid grid-cols-3  gap-[30px] mt-[40px]'>
            {cards.map((card,i)=>(
                <div key={i} className='border w-[340px]'>
                    <h2>{card.title}</h2>
                    <p>{card.des}</p>
                    <p>{card.price}{card.pricE}</p>
                    <ul>
                        <li>✔{card.li1}</li>
                        <li>✔{card.li2}</li>
                        <li>✔{card.li3}</li>
                        <li>✔{card.li4}</li>
                    </ul>
                    <button className='btn btn-success'>{card.btn}</button>
                </div>
            ))}
        </div>
    );
};

export default PricingCard;