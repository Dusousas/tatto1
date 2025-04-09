import React from 'react';
import Form from './subc/Form';

export default function Contact() {
    return (
        <>
            <section className='py-20'>
                <div className='maxW flex flex-col justify-center gap-y-10 lg:flex-row'>

                    <article className='lg:w-1/2 px-10'>
                        <div className="pb-8">
                            <h5 className="text-Second tracking-widest italic text-center text-lg lg:text-left">Entre em contato</h5>
                            <h1 className="text-center tracking-widest text-5xl font-semibold uppercase lg:text-left">Reserve seu Horário!</h1>
                            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nam iusto expedita ipsum sed voluptate!s</p>
                        </div>

                        <div className='flex justify-between border-b border-dashed pb-4'>
                           <h2 className='uppercase font-semibold'>Segunda - Sexta</h2>
                           <p>08:00 às 21:00</p>
                        </div>

                        <div className='flex justify-between border-b border-dashed pb-4 mt-6'>
                           <h2 className='uppercase font-semibold'>Sábados</h2>
                           <p>10:00 às 18:00</p>
                        </div>

                        <div className='flex justify-between border-b border-dashed pb-4 mt-6'>
                           <h2 className='uppercase font-semibold'>Domingos</h2>
                           <span className='text-red-600 uppercase'>Fechado</span>
                        </div>
                    </article>

                    <article className='lg:w-1/2 px-10'>
                        <Form />
                    </article>
                </div>
            </section>
        </>
    );
}