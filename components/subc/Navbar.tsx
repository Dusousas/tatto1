import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden'; // Desativa/ativa o scroll
    };

    // Prevent scroll when menu is open
    useEffect(() => {
        return () => {
            document.body.style.overflow = 'auto'; // Reset on unmount
        };
    }, []);

    return (
        <>
            {/* MENU DESKTOP */}
            <nav className='hidden lg:flex justify-between items-center px-10 w-full'>
                <ul className='flex items-center gap-10 text-white justify-end uppercase w-[33.3%]'>
                    <li><a href="#home">Início</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                </ul>

                <div className='text-center w-[33.3%]'>
                    <a className='text-3xl uppercase text-white font-bold' href="">Logotipo</a>
                </div>

                <ul className='flex items-center gap-10 text-white uppercase w-[33.3%]'>
                    <li><a href="#numbers">Numeros</a></li>
                    <li><a href="#artists">Artistas</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>

            {/* BOTÃO MENU MOBILE */}
            <div className='lg:hidden flex justify-end p-4'>
                <button onClick={toggleMobileMenu} aria-label="Abrir menu mobile">
                    <FaBars className='text-2xl text-white' />
                </button>
            </div>

            {/* MENU MOBILE - Com animação deslizante da direita para esquerda */}
            <div className={`fixed top-0 right-0 w-full h-full bg-black text-white z-50 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="flex flex-col items-center justify-center h-full">
                    <button
                        onClick={toggleMobileMenu}
                        aria-label="Fechar menu mobile"
                        className='absolute top-18 right-6 text-3xl'
                    >
                        <FaTimes />
                    </button>
                    <ul className='uppercase text-center space-y-6 text-xl'>
                        <li><a href="#home" onClick={toggleMobileMenu}>Início</a></li>
                        <li><a href="#about" onClick={toggleMobileMenu}>Sobre</a></li>
                        <li><a href="#portfolio" onClick={toggleMobileMenu}>Portfolio</a></li>
                        <li><a href="#numbers" onClick={toggleMobileMenu}>Numeros</a></li>
                        <li><a href="#artists" onClick={toggleMobileMenu}>Artistas</a></li>
                        <li><a href="#contact" onClick={toggleMobileMenu}>Contato</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}