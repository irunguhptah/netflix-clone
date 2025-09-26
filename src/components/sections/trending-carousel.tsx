"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BORDER_GRAY = "rgb(179, 179, 179)";

const allTrendingItems = [
  { rank: 1, title: "Wednesday", imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5206fbfd-7267-4a70-ba9d-cd6766a1f20d-netflix-com/assets/images/AAAABY3hif-og_bO_37ovyuTRLEHk5P-s2cdSwXyPX9agKQzyidW7qeVu5TtCu7IQaqFq-48mKF98JMJ-hp_DrsfIAY5iM0cZdlZcvY21KVVCbpjelS9tm4F2s-b4k8mzZlCET2d-5.webp" },
  { rank: 2, title: "Beauty in Black", imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5206fbfd-7267-4a70-ba9d-cd6766a1f20d-netflix-com/assets/images/AAAABbRJEvKGGbC4rAoI_P9n4fTWxhlSw6tXK-0O2TjCEbYiVxey6vzcUZBRs1Ms4nUPFU-D_5IMWEdH6ucsUZe30q6021Q1Su5qoFrAGyOtMRadM31aYk6CIuVjEftEobMerAR2-11.webp" },
  { rank: 3, title: "Canelo Álvarez vs. Terence Crawford", imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5206fbfd-7267-4a70-ba9d-cd6766a1f20d-netflix-com/assets/images/AAAABcrhAaNZU6tXbpVoi9LpbMZmjZX22ZfuOwNmuPy5i4quoB8cWiO-67vbTk07rZyX5YtKKci5c0XoFHJ1vphlx0Rau-hgCpnzEfMORMer4uPuTytZw3q4AMK38cPtc4fjKe2e-8.webp" },
  { rank: 4, title: "KPop Demon Hunters", imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5206fbfd-7267-4a70-ba9d-cd6766a1f20d-netflix-com/assets/images/AAAABSkTqcl4espfr1T2MXY7IPThx8Lsy5TE1CbaqoU2ZDRSBX2rQP7RxEx12O9hfeCx9ARtKpdvyyqkWYhNUbu8VesRfxegOyckS0a083oNizun0WxObhFM4qSMGFxBivs1XlQd-4.webp" },
  { rank: 5, title: "Unknown Number: The High School Catfish", imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5206fbfd-7267-4a70-ba9d-cd6766a1f20d-netflix-com/assets/images/AAAABWrTjWMrsToh9vAoz8rKrhSSHdJW6bmhL8Lvv63zCy1lo3O1TFqvZH4U80xS1vDJJV00sc97Ntd2b1Y1vh3v4SIs60pAtWC6pottJ80j5h4ITJPEURiTJEH4O_a47L1S0qlG-3.webp" },
  { rank: 6, title: "Happy Gilmore 2", imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5206fbfd-7267-4a70-ba9d-cd6766a1f20d-netflix-com/assets/images/AAAABQN2HJjk3iwDn4sXHV3QQM2HxYFrCSd1nR-GW8AEuyJz_l4Vg_yjLtNCe2Hhn-utIJ7GqQuGoRTShQDD9crpv_9DZ33RiNfBEho-9.webp" },
  { rank: 7, title: "The Diplomat", imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5206fbfd-7267-4a70-ba9d-cd6766a1f20d-netflix-com/assets/images/AAAABSkTqcl4espfr1T2MXY7IPThx8Lsy5TE1CbaqoU2ZDRSBX2rQP7RxEx12O9hfeCx9ARtKpdvyyqkWYhNUbu8VesRfxegOyckS0a083oNizun0WxObhFM4qSMGFxBivs1XlQd-4.webp" },
  { rank: 8, title: "Stranger Things", imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5206fbfd-7267-4a70-ba9d-cd6766a1f20d-netflix-com/assets/images/AAAABWrTjWMrsToh9vAoz8rKrhSSHdJW6bmhL8Lvv63zCy1lo3O1TFqvZH4U80xS1vDJJV00sc97Ntd2b1Y1vh3v4SIs60pAtWC6pottJ80j5h4ITJPEURiTJEH4O_a47L1S0qlG-3.webp" },
  { rank: 9, title: "The Crown", imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5206fbfd-7267-4a70-ba9d-cd6766a1f20d-netflix-com/assets/images/AAAABQN2HJjk3iwDn4sXHV3QQM2HxYFrCSd1nR-GW8AEuyJz_l4Vg_yjLtNCe2Hhn-utIJ7GqQuGoRTShQDD9crpv_9DZ33RiNfBEho-9.webp" },
  { rank: 10, title: "Ozark", imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5206fbfd-7267-4a70-ba9d-cd6766a1f20d-netflix-com/assets/images/AAAABcrhAaNZU6tXbpVoi9LpbMZmjZX22ZfuOwNmuPy5i4quoB8cWiO-67vbTk07rZyX5YtKKci5c0XoFHJ1vphlx0Rau-hgCpnzEfMORMer4uPuTytZw3q4AMK38cPtc4fjKe2e-8.webp" },
];

const NetflixIconN = () => (
    <svg className="absolute top-2 left-2 z-10 w-[9px] h-[17px]" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.1001 0.5H6.0001L1.0001 10.3V0.5H-0.0998993V17.5H3.0001L8.0001 7.7V17.5H10.1001V0.5H9.1001Z" fill="#E50914" />
    </svg>
);

const TrendingCarousel = () => {
    const [currentPage, setCurrentPage] = React.useState(0);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(allTrendingItems.length / itemsPerPage);
    
    const currentItems = allTrendingItems.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    const goToNext = () => {
        setCurrentPage(prev => (prev + 1) % totalPages);
    };

    const goToPrev = () => {
        setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
    };

    return (
        <section className="py-8 md:py-12 bg-black text-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-[32px] leading-[40px] font-bold mb-4 text-center">Trending Now</h2>
                <div className="flex items-center justify-center gap-4">
                    {currentPage > 0 && (
                        <button 
                            onClick={goToPrev} 
                            className="p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors"
                            aria-label="Previous page"
                        >
                            <ChevronLeft className="w-8 h-8 text-white" />
                        </button>
                    )}
                    
                    <div className="flex gap-2 py-2">
                        {currentItems.map((item) => (
                            <div key={item.rank} className="flex-shrink-0">
                                <button className="relative group/item transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none">
                                    <div className="relative w-[159px] h-[239px] rounded-sm overflow-hidden shadow-lg">
                                        <NetflixIconN />
                                        <Image src={item.imageUrl} alt={item.title} width={159} height={239} className="object-cover" />
                                        <span className="absolute bottom-2 left-2 text-[80px] font-bold text-black select-none z-20" aria-hidden="true">{item.rank}</span>
                                        <span className="absolute bottom-2 left-2 text-[80px] font-bold text-transparent select-none z-20" style={{ WebkitTextStroke: `2px ${BORDER_GRAY}` }} aria-hidden="true">{item.rank}</span>
                                    </div>
                                    <span className="sr-only">{item.title}</span>
                                </button>
                            </div>
                        ))}
                    </div>
                    
                    {currentPage < totalPages - 1 && (
                        <button 
                            onClick={goToNext} 
                            className="p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors"
                            aria-label="Next page"
                        >
                            <ChevronRight className="w-8 h-8 text-white" />
                        </button>
                    )}
                </div>
                
                <div className="flex justify-center mt-4 gap-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                                i === currentPage ? 'bg-white' : 'bg-white/30'
                            }`}
                            aria-label={`Go to page ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrendingCarousel;