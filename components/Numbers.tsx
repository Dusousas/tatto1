import React from 'react';

const stats = [
  { number: 999, label: 'Artworks' },
  { number: 888, label: 'Clientes' },
  { number: 777, label: 'Premiações' },
  { number: 666, label: 'Followers' },
  { number: 3, label: 'Artistas' },
];

export default function Numbers() {
  return (
    <section id='numbers' className='py-40 numberBG'>
      <div className='maxW flex flex-col justify-center gap-20 lg:flex-row'>
        {stats.map((item, index) => (
          <div key={index} className='text-center'>
            <h1 className='text-7xl font-bold'>{item.number}</h1>
            <h6 className='italic text-xl'>{item.label}</h6>
          </div>
        ))}
      </div>
    </section>
  );
}
