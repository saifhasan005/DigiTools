import React from 'react';

const plans = [
  { name: 'Starter', desc: 'Perfect for getting started', price: '$0', cta: 'Get Started Free', features: ['Access to free tools', 'Basic Templates', 'Community Support', '1 Project per month'] },
  { name: 'Pro', desc: 'Best for Professionals', price: '$29', cta: 'Start Pro Trial', badge: 'Most Popular', highlight: true, features: ['All premium tools', 'Unlimited Templates', 'Priority Support', 'Unlimited Projects', 'Cloud Sync', 'Advanced Analytics'] },
  { name: 'Enterprise', desc: 'For teams and businesses', price: '$99', cta: 'Contact Sales', features: ['Everything in Pro', 'Team Collaboration', 'Custom Integration', 'Dedicated Support', 'SLA Guarantee', 'Custom Branding'] },
];

const PricingCard = () => (
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 max-w-[1200px] mx-auto'>
    {plans.map(({ name, desc, price, cta, badge, highlight, features }) => (
      <div key={name} className={`active:-translate-y-1 transition-transform duration-200 hover:-translate-y-1 transition-transform duration-200  flex flex-col rounded-2xl shadow-xl p-6 border ${highlight ? 'bg-gradient-to-br from-[#662df7] to-[#871bfa] text-white border-transparent' : 'bg-white border-zinc-200'}`}>
        {badge && <span className='absolute top-4 right-4 bg-[#fff4c7] text-[#db9f63] text-xs font-semibold px-3 py-1 rounded-full'>{badge}</span>}
        <p className='font-bold text-2xl'>{name}</p>
        <p className={`text-sm mt-1 mb-4 ${highlight ? 'text-purple-200' : 'text-gray-500'}`}>{desc}</p>
        <p className='font-bold text-3xl'>{price}<span className={`text-sm font-normal ml-1 ${highlight ? 'text-purple-200' : 'text-gray-500'}`}>/mo</span></p>
        <ul className='mt-5 flex-1 space-y-2'>
          {features.map(f => (
            <li key={f} className={`text-sm flex gap-2 ${highlight ? 'text-purple-100' : 'text-gray-500'}`}>
              <span className={highlight ? 'text-white' : 'text-purple-600'}>✔</span>{f}
            </li>
          ))}
        </ul>
        <button className={`mt-8 w-full py-3 rounded-2xl font-semibold text-sm ${highlight ? 'bg-white text-[#871bfa]' : 'bg-gradient-to-r from-[#662df7] to-[#871bfa] text-white'}`}>{cta}</button>
      </div>
    ))}
  </div>
);

export default PricingCard;