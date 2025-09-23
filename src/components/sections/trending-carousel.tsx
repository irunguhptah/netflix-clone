"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BORDER_GRAY = "rgb(179, 179, 179)";

const trendingItems = [
  { rank: 1, title: "Wednesday", imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5206fbfd-7267-4a70-ba9d-cd6766a1f20d-netflix-com/assets/images/AAAABY3hif-og_bO_37ovyuTRLEHk5P-s2cdSwXyPX9agKQzyidW7qeVu5TtCu7IQaqFq-48mKF98JMJ-hp_DrsfIAY5iM0cZdlZcvY21KVVCbpjelS9tm4F2s-b4k8mzZlCET2d-5.webp" },
  { rank: 2, title: "Beauty in Black", imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5206fbfd-7267-4a70-ba9d-cd6766a1f20d-netflix-com/assets/images/AAAABbRJEvKGGbC4rAoI_P9n4fTWxhlSw6tXK-0O2TjCEbYiVxey6vzcUZBRs1Ms4nUPFU-D_5IMWEdH6ucsUZe30q6021Q1Su5qoFrAGyOtMRadM31aYk6CIuVjEftEobMerAR2-11.webp" },
  { rank: 3, title: "Canelo Álvarez vs. Terence Crawford", imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5206fbfd-7267-4a70-ba9d-cd6766a1f20d-netflix-com/assets/images/AAAABcrhAaNZU6tXbpVoi9LpbMZmjZX22ZfuOwNmuPy5i4quoB8cWiO-67vbTk07rZyX5YtKKci5c0XoFHJ1vphlx0Rau-hgCpnzEfMORMer4uPuTytZw3q4AMK38cPtc4fjKe2e-8.webp" },
  { rank: 4, title: "KPop Demon Hunters", imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5206fbfd-7267-4a70-ba9d-cd6766a1f20d-netflix-com/assets/images/AAAABSkTqcl4espfr1T2MXY7IPThx8Lsy5TE1CbaqoU2ZDRSBX2rQP7RxEx12O9hfeCx9ARtKpdvyyqkWYhNUbu8VesRfxegOyckS0a083oNizun0WxObhFM4qSMGFxBivs1XlQd-4.webp" },
  { rank: 5, title: "Unknown Number: The High School Catfish", imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5206fbfd-7267-4a70-ba9d-cd6766a1f20d-netflix-com/assets/images/AAAABWrTjWMrsToh9vAoz8rKrhSSHdJW6bmhL8Lvv63zCy1lo3O1TFqvZH4U80xS1vDJJV00sc97Ntd2b1Y1vh3v4SIs60pAtWC6pottJ80j5h4ITJPEURiTJEH4O_a47L1S0qlG-3.webp" },
  { rank: 6, title: "Happy Gilmore 2", imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5206fbfd-7267-4a70-ba9d-cd6766a1f20d-netflix-com/assets/images/AAAABQN2HJjk3iwDn4sXHV3QQM2HxYFrCSd1nR-GW8AEuyJz_l4Vg_yjLtNCe2Hhn-utIJ7GqQuGoRTShQDD9crpv_9DZ33RiNfBEho-9.webp" },
  { rank: 7, title: "28 Years Later", imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5206fbfd-7267-4a70-ba9d-cd6766a1f20d-netflix-com/assets/images/AAAABY3hif-og_bO_37ovyuTRLEHk5P-s2cdSwXyPX9agKQzyidW7qeVu5TtCu7IQaqFq-48mKF98JMJ-hp_DrsfIAY5iM0cZdlZcvY21KVVCbpjelS9tm4F2s-b4k8mzZlCET2d-5.webp"},
  { rank: 8, title: "Madea’s Destination Wedding", imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5206fbfd-7267-4a70-ba9d-cd6766a1f20d-netflix-com/assets/images/AAAABbRJEvKGGbC4rAoI_P9n4fTWxhlSw6tXK-0O2TjCEbYiVxey6vzcUZBRs1Ms4nUPFU-D_5IMWEdH6ucsUZe30q6021Q1Su5qoFrAGyOtMRadM31aYk6CIuVjEftEobMerAR2-11.webp" },
];

const NetflixIconN = () => (
    <svg className="absolute top-2 left-2 z-10 w-[9px] h-[17px]" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.1001 0.5H6.0001L1.0001 10.3V0.5H-0.0998993V17.5H3.0001L8.0001 7.7V17.5H10.1001V0.5H9.1001Z" fill="#E50914" />
    </svg>
);

const TrendingCarousel = () => {
    const carouselRef = React.useRef<HTMLUListElement>(null);
    const [showLeftArrow, setShowLeftArrow] = React.useState(false);
    const [showRightArrow, setShowRightArrow] = React.useState(true);
    const [isHovering, setIsHovering] = React.useState(false);

    const handleScroll = React.useCallback(() => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setShowLeftArrow(scrollLeft > 10);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    }, []);

    React.useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            handleScroll();
            carousel.addEventListener('scroll', handleScroll, { passive: true });
            return () => carousel.removeEventListener('scroll', handleScroll);
        }
    }, [handleScroll]);

    const scroll = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.clientWidth * 0.8;
            carouselRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-8 md:py-12 bg-black text-white overflow-hidden">
            <div className="mx-auto" style={{ paddingLeft: 'min(4vw, 50px)' }}>
                <h2 className="text-[32px] leading-[40px] font-bold mb-4">Trending Now</h2>
                <div 
                    className="relative"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {showLeftArrow && (
                        <button onClick={() => scroll('left')} className={`absolute left-0 top-0 h-full w-16 z-20 bg-gradient-to-r from-black to-transparent items-center justify-start hidden md:flex transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`} aria-label="Scroll left">
                           <ChevronLeft className="w-12 h-12 text-white/80 hover:text-white hover:scale-110 transition-transform" />
                        </button>
                    )}
                    <ul ref={carouselRef} className="flex overflow-x-auto scroll-smooth py-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        {trendingItems.map((item) => (
                            <li key={item.rank} className="flex-shrink-0 px-1 first:pl-0">
                                <button className="flex items-end group/item transition-transform duration-300 ease-in-out hover:scale-110 hover:z-10 focus:outline-none">
                                    <div className="relative w-[105px] h-[239px] flex items-end overflow-hidden">
                                        <span className="absolute -bottom-10 -left-1 text-[192px] font-bold text-black select-none" aria-hidden="true">{item.rank}</span>
                                        <span className="absolute -bottom-10 -left-1 text-[192px] font-bold text-transparent select-none" style={{ WebkitTextStroke: `2px ${BORDER_GRAY}` }} aria-hidden="true">{item.rank}</span>
                                    </div>
                                    <div className="relative w-[159px] h-[239px] ml-[-4px] rounded-sm overflow-hidden shadow-lg">
                                        <NetflixIconN />
                                        <Image src={item.imageUrl} alt={item.title} width={159} height={239} className="object-cover" />
                                    </div>
                                    <span className="sr-only">{item.title}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                    {showRightArrow && (
                        <button onClick={() => scroll('right')} className={`absolute right-0 top-0 h-full w-16 z-20 bg-gradient-to-l from-black to-transparent items-center justify-end hidden md:flex transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`} style={{ paddingRight: 'min(4vw, 50px)'}} aria-label="Scroll right">
                           <ChevronRight className="w-12 h-12 text-white/80 hover:text-white hover:scale-110 transition-transform" />
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TrendingCarousel;