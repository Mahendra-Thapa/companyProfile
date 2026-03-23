"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // npm install lucide-react

const jobCards = [
  { id: 1, title: "Jobs in Saudi Arabia", image: "/flag/saudi-arabia.png" },
  { id: 2, title: "Jobs in UAE", image: "/flag/uae.png" },
  { id: 3, title: "Jobs in Qatar", image: "/flag/qatar.png" },
  { id: 4, title: "Jobs in Kuwait", image: "/flag/kuwait.png" },
  { id: 5, title: "Jobs in Oman", image: "/flag/oman.png" },
  { id: 6, title: "Jobs in Bahrain", image: "/flag/bahrain.png" },
  { id: 7, title: "Jobs in Malaysia", image: "/flag/malaysia.png" },
];

export default function JobCarousel() {
  // 1. Initialize Embla with 'loop' option
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-white">
      <h1 className="text-2xl sm:text-4xl font-bold mb-12 text-center">
        Looking for Overseas Jobs?
      </h1>

      {/* Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {jobCards.map(job => (
            <div
              key={job.id}
              className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
            >
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 transition-transform hover:scale-[1.02]">
                <div className="aspect-[16/10] overflow-hidden rounded-lg relative bg-gray-200">
                  {/* Replace with <Image /> from next/image for production */}
                  <img
                    src={job.image}
                    alt={job.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-6 text-center font-bold text-gray-800 text-lg">
                  {job.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={scrollPrev}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
