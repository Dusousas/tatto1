import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Gallery() {
    const swiperRef = useRef<SwiperCore | null>(null);

    const slideOneImages = [
        { src: "galeria/galeria1.jpg", alt: "Tatuagem 1", rowSpan: true },
        { src: "galeria/galeria2.jpg", alt: "Tatuagem 2", rowSpan: false },
        { src: "galeria/galeria3.jpg", alt: "Tatuagem 3", rowSpan: true },
        { src: "galeria/galeria1.jpg", alt: "Tatuagem 1", rowSpan: false },
        { src: "galeria/galeria2.jpg", alt: "Tatuagem 2", rowSpan: true },
        { src: "galeria/galeria2.jpg", alt: "Tatuagem 2", rowSpan: false },
        { src: "galeria/galeria1.jpg", alt: "Tatuagem 1", rowSpan: false },
        { src: "galeria/galeria1.jpg", alt: "Tatuagem 1", rowSpan: false },
        { src: "galeria/galeria2.jpg", alt: "Tatuagem 2", rowSpan: false },
        { src: "galeria/galeria3.jpg", alt: "Tatuagem 3", rowSpan: false },
        { src: "galeria/galeria1.jpg", alt: "Tatuagem 1", rowSpan: false },
        { src: "galeria/galeria2.jpg", alt: "Tatuagem 2", rowSpan: false }
    ];

    const slideTwoImages = [
        { src: "galeria/galeria3.jpg", alt: "Tatuagem 3", rowSpan: true },
        { src: "galeria/galeria1.jpg", alt: "Tatuagem 1", rowSpan: false },
        { src: "galeria/galeria2.jpg", alt: "Tatuagem 2", rowSpan: true },
        { src: "galeria/galeria3.jpg", alt: "Tatuagem 3", rowSpan: false },
        { src: "galeria/galeria1.jpg", alt: "Tatuagem 1", rowSpan: true },
        { src: "galeria/galeria1.jpg", alt: "Tatuagem 1", rowSpan: false },
        { src: "galeria/galeria3.jpg", alt: "Tatuagem 3", rowSpan: false },
        { src: "galeria/galeria2.jpg", alt: "Tatuagem 2", rowSpan: false },
        { src: "galeria/galeria1.jpg", alt: "Tatuagem 1", rowSpan: false },
        { src: "galeria/galeria2.jpg", alt: "Tatuagem 2", rowSpan: false },
        { src: "galeria/galeria3.jpg", alt: "Tatuagem 3", rowSpan: false },
        { src: "galeria/galeria1.jpg", alt: "Tatuagem 1", rowSpan: false }
    ];

    const renderGrid = (images: any[]) => (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 auto-rows-[250px]">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`overflow-hidden ${img.rowSpan ? 'row-span-2' : ''}`}
                >
                    <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
            ))}
        </div>
    );

    return (
        <section id='portfolio' className="fullBG py-20">
            <div className="px-2">
                <h5 className='text-Second tracking-widest italic text-center text-lg'>Tattoo & Piercing</h5>
                <h1 className='text-center tracking-widest text-5xl font-semibold uppercase mt-4'>Galeria de Tatuagens</h1>
                <span className='text-center mt-4 flex justify-center text-Second mb-20 lg:px-40'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta adipisci beatae laborum excepturi sapiente veniam, nam labore magni exercitationem quisquam. Ducimus quam perferendis voluptatibus optio adipisci molestiae. Labore, necessitatibus optio.
                </span>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="custom"
                >
                    <SwiperSlide>{renderGrid(slideOneImages)}</SwiperSlide>
                    <SwiperSlide>{renderGrid(slideTwoImages)}</SwiperSlide>
                </Swiper>

                {/* SETAS */}
                <div className='w-full flex justify-center mt-10 gap-20'>
                    <img
                        className='w-[20%] object-cover lg:w-[8%] cursor-pointer hover:scale-110 transition-transform duration-300'
                        src="setas.png"
                        alt="Seta esquerda"
                        onClick={() => swiperRef.current?.slidePrev()}
                    />
                    <img
                        className='w-[20%] lg:w-[8%] -scale-x-100 cursor-pointer transition-transform duration-300'
                        src="setas.png"
                        alt="Seta direita"
                        onClick={() => swiperRef.current?.slideNext()}
                    />
                </div>
            </div>
        </section>
    );
}
