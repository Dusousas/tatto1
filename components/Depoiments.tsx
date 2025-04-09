import React, { JSX, useRef } from 'react';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import type { Swiper as SwiperType } from 'swiper';


// Tipagem do depoimento
interface Depoimento {
  texto: string;
  nome: string;
  profissao: string;
}

const depoimentos: Depoimento[] = [
  {
    texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis molestiae et quae asperiores porro dignissimos! Facilis, nostrum eum! Vero, laborum.',
    nome: 'Nome do Artista',
    profissao: 'tattoo artist',
  },
  {
    texto: 'Outro depoimento muito interessante sobre o trabalho e atendimento.',
    nome: 'Nome do Artista',
    profissao: 'tattoo artist',
  },
  {
    texto: 'Excelente experiência! Voltarei com certeza.',
    nome: 'Nome do Artista',
    profissao: 'piercing artist',
  },
];

export default function Depoiments(): JSX.Element {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className='depoBG py-20 relative'>
      <div className='maxW'>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
     
        >
          {depoimentos.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='text-center px-20 mx-auto '>
                <RiDoubleQuotesL className='mx-auto text-7xl mb-6' />
                <h5 className='lg:text-2xl italic'>" {item.texto} "</h5>
                <h1 className='uppercase font-bold tracking-widest lg:text-xl mt-6'>{item.nome}</h1>
                <p>{item.profissao}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* SETAS LATERAIS */}
        <div className='absolute w-[8%] top-1/2 -translate-y-1/2 left-2 lg:left-20 z-10'>
          <img
            className=' cursor-pointer transition-transform duration-300'
            src='setas.png'
            alt='Seta esquerda'
            onClick={() => swiperRef.current?.slidePrev()}
          />
        </div>
        <div className='absolute w-[8%] top-1/2 -translate-y-1/2 right-2 lg:right-20 z-10'>
          <img
            className='cursor-pointer  transition-transform duration-300 -scale-x-100'
            src='setas.png'
            alt='Seta direita'
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>
    </section>
  );
}
