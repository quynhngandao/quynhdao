

 

    'use client';
    import 'flowbite';

    import { Carousel } from 'flowbite-react';
    
    export default function Animal() {
        const imageUrls =[
            // ... (your image URLs)
            "https://i.imgur.com/KAkGb0T.jpg",
            "https://i.imgur.com/p0b32A8.jpg",
            "https://i.imgur.com/HmgGm67.jpg",
            "https://i.imgur.com/vOrUUBr.jpg",
            "https://i.imgur.com/4A0WJko.jpg",
            "https://i.imgur.com/eYeLdwL.jpg",
            "https://i.imgur.com/Gv66Eiq.jpg",
            "https://i.imgur.com/q01st8W.jpg",
            "https://i.imgur.com/dqDdyLO.jpg",
            "https://i.imgur.com/WL4awq4.jpg",
            "https://i.imgur.com/RSMHxGd.jpg",
            "https://i.imgur.com/2syymRl.jpg",
            "https://i.imgur.com/CU5UBAT.jpg",
            "https://i.imgur.com/371swRi.jpg",
            "https://i.imgur.com/pM5vvhQ.jpg",
            "https://i.imgur.com/4S7Osw1.jpg",
            "https://i.imgur.com/s97ZFBo.jpg",
            "https://i.imgur.com/AkAycBA.jpg",
            "https://i.imgur.com/bdEHb2m.jpg",
            "https://i.imgur.com/fPMPxiG.jpg",
            "https://i.imgur.com/dAOFgq3.jpg",
            "https://i.imgur.com/JbzzGMp.jpg",
            "https://i.imgur.com/pbTbszy.jpg",
            "https://i.imgur.com/Sjw1y0g.jpg",
            "https://i.imgur.com/MagbVP2.jpg",
            "https://i.imgur.com/RfQ5jp8.jpg",
        ]
      return (
       
<div id="controls-carousel" className="relative w-full" data-carousel="static">
   
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
      
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        {imageUrls.map((imageUrl, index) => (
                <div key={index} className={` duration-700 ease-in-out ${index === 0 ? 'active' : ''}`} data-carousel-item>
                    <img src={imageUrl} className="absolute block w-1/3 -translate-x-1/2 -translate-y-1/2 h-1/2 top-1/2 left-1/2" alt={`Slide ${index + 1}`} />
                </div>
            ))}
        </div>
    </div>
   
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>
      
      )
    }
    



