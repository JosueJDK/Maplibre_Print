"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const images_corousel = [
        {
            text_1: "Bienvenido",
            text_2: "Sistema de Análisis de Viajes",
            text_3: "Sistema que permite conocer y analizar los viajes de las personas en Lima y Callao",
            link: '/img/slider/1.jpg'
        }, 
        {
            text_1: "Big Data",
            text_2: "Los datos como fuente de Información",
            text_3: "Se analizan millones de viajes, rutas, motivos, etc. usando modelos Big Data para obtener la información.",
            link: '/img/slider/2.jpg'
        }, 
        {
            text_1: "Movilidad",
            text_2: "Personas",
            text_3: "El conocimiento del perfil del viajero, sus motivos, entre otros alimentan la planificación del desarrollo del transporte.",
            link: '/img/slider/3.jpg'
        },    ]

    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    const goToPrevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? 2 : prevIndex - 1
        );
    };

    const goToNextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 2 ? 0 : prevIndex + 1
        );
    };
    
    React.useEffect(() => {
        const interval = setInterval(() => {
            goToNextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    return (    
        <div id="default-carousel" className="relative w-full">
            <div className="relative overflow-hidden sm:h-[230px] md:h-[430px] lg:h-[730px] xl:h-[750px] h-[230px]">
                {images_corousel.map((item, index) => (
                    <div key={item.link} 
                    className={`absolute block w-full h-full transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`} 
                    data-carousel-item>
                        <Image src={`${process.env.basePath}${item.link}`} className="absolute block w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={`Slide ${index + 1}`} width={1903} height={750}/>
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white space-y-4 bg-black bg-opacity-60">
                            <h1 className="text-5xl font-bold text-[#004B98]">{item.text_1}</h1>
                            <p className="text-6xl">{item.text_2}</p>
                            <p className="text-xl mt-4">{item.text_3}</p>
                            <Link href={`/map`} className="mt-4 inline-block bg-white hover:bg-[#004B98] text-[#004B98] hover:text-white font-bold py-3 px-8 border border-[#004B98] rounded transition-colors duration-300 ease-in-out z-10">Ingresar al Sistema</Link>
                        </div>

                    </div>
                ))}
            </div>
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {images_corousel.map((item, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-5 h-5 rounded-full ${index === activeIndex ? 'bg-[#004B98]' : 'border-[#004B98] border-2'}`}
                        aria-current={index === activeIndex ? 'true' : 'false'}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={goToPrevSlide} data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={goToNextSlide} data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
    
}
