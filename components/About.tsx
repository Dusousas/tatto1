import React, { useState, useRef, useEffect, JSX } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

// Definindo as interfaces para as props
interface CustomDetailProps {
    id: string;
    summary: string;
    children: React.ReactNode;
}

export default function About(): JSX.Element {
    const [openDetails, setOpenDetails] = useState<Record<string, boolean>>({
        detail1: false,
        detail2: false,
        detail3: false
    });

    const toggleDetail = (detailId: string): void => {
        setOpenDetails(prevState => ({
            ...prevState,
            [detailId]: !prevState[detailId]
        }));
    };

    const CustomDetail: React.FC<CustomDetailProps> = ({ id, summary, children }) => {
        const isOpen = openDetails[id];
        const contentRef = useRef<HTMLDivElement>(null);
        const [contentHeight, setContentHeight] = useState<number>(0);

        useEffect(() => {
            if (contentRef.current) {
                setContentHeight(contentRef.current.scrollHeight);
            }
        }, [children]);

        return (
            <div className="border-b border-dashed py-8">
                <div
                    className="flex justify-between items-center cursor-pointer transition-all duration-500 ease-in-out"
                    onClick={() => toggleDetail(id)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    style={{
                        paddingBottom: isOpen ? '0.75rem' : '0rem',
                        transform: isOpen ? 'translateY(-2px)' : 'translateY(0)', // sutil movimento para cima quando aberto
                    }}
                >
                    <h3 className="font-medium transition-all duration-500 ease-in-out uppercase tracking-wider"
                        style={{
                            transform: isOpen ? 'translateX(8px)' : 'translateX(0)',
                        }}
                    >
                        {summary}
                    </h3>

                    <div className="relative w-6 h-6 flex items-center justify-center">
                        <span className="absolute transition-all duration-500 ease-in-out"
                            style={{
                                opacity: isOpen ? 0 : 1,
                                transform: isOpen ? 'rotate(90deg)' : 'rotate(0)',
                            }}><FiPlus /></span>

                        <span
                            className="absolute transition-all duration-500 ease-in-out"
                            style={{
                                opacity: isOpen ? 1 : 0,
                                transform: isOpen ? 'rotate(0)' : 'rotate(-90deg)',
                            }}><FiMinus /></span>
                    </div>
                </div>

                <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                        maxHeight: isOpen ? `${contentHeight}px` : '0',
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
                        transitionProperty: 'max-height, opacity, transform',
                        transformOrigin: 'top'
                    }}
                >
                    <div ref={contentRef} className="py-2">
                        {children}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <section id='about' className="py-20">
                <div className="maxW flex flex-col justify-center items-center lg:flex-row">
                    <article className="lg:w-1/2">
                        <div className="border-b border-dashed pb-8">
                            <h5 className="text-Second tracking-widest italic text-center text-lg lg:text-left">Tattoo & Piercing</h5>
                            <h1 className="text-center tracking-widest text-5xl font-semibold uppercase lg:text-left">Monkey’s</h1>
                            <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nam iusto expedita ipsum sed voluptate!</p>
                        </div>

                        <CustomDetail id="detail1" summary="Como nasceu o nosso estúdio?">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, consequuntur?</p>
                        </CustomDetail>

                        <CustomDetail id="detail2" summary="Quais estilos de tatuagem fazem parte da nossa identidade?">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, consequuntur?</p>
                        </CustomDetail>

                        <CustomDetail id="detail3" summary="Quem são os artistas por trás do nosso estúdio?">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, consequuntur?</p>
                        </CustomDetail>
                    </article>

                    <article className='lg:w-1/2 flex justify-center mt-20 lg:mt-0'>
                        <img src="aboutdark.png" alt="" />
                    </article>

                </div>
            </section>
        </>
    );
}