import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';

export default function Main() {
    return (
        <>
            <section id='home' className='mainBG relative top-0 flex items-center'>
                <div className='maxW'>
                    <h5 className='text-white tracking-widest italic text-center text-xl'>Tattoo & Piercing</h5>
                    <h1 className='text-center tracking-widest text-5xl italic font-semibold uppercase mt-6 lg:text-8xl'>Monkey’s</h1>
                    <span className='text-center mt-6  flex text-white lg:px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta adipisci beatae laborum excepturi sapiente veniam, nam labore magni exercitationem quisquam. Ducimus quam perferendis voluptatibus optio adipisci molestiae. Labore, necessitatibus optio.</span>

                    <div className='flex justify-center mt-10'>
                        <a className='text-white uppercase border px-6 py-3' href="">Saiba mais</a>
                    </div>

                    <article className='flex gap-1 absolute bottom-5 right-5'>
                        <a className='text-3xl' href=""><FaInstagramSquare /></a>
                        <a className='text-3xl' href=""><FaFacebookSquare /></a>
                        <a className='text-3xl' href=""><FaWhatsappSquare /></a>
                    </article>
                </div>
            </section>
        </>
    );
}