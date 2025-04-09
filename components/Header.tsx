import React from 'react';
import Navbar from './subc/Navbar';

export default function Header() {
    return (
        <>
            <header className='py-15 absolute z-10 w-full'>
                <div className='maxW flex justify-between items-center'>
                    <div className='text-center w-[33.3%] lg:hidden'>
                        <a className='text-3xl uppercase text-white font-bold' href="">Logotipo</a>
                    </div>
                    <Navbar />
                </div>
            </header>
        </>
    );
}