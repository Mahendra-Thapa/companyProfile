"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const jobCards = [
  { id: 1, title: "Saudi Arabia", image: "/flag/saudi-arabia.png" },
  { id: 2, title: "UAE", image: "/flag/uae.png" },
  { id: 3, title: "Qatar", image: "/flag/qatar.png" },
  { id: 4, title: "Kuwait", image: "/flag/kuwait.png" },
  { id: 5, title: "Oman", image: "/flag/oman.png" },
  { id: 6, title: "Bahrain", image: "/flag/bahrain.png" },
  { id: 7, title: "Malaysia", image: "/flag/malaysia.png" },
];

export default function JobCarousel() {
  return (
    <section className="max-w-7xl  px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Header */}
      <div className="text-center mb-10">
        <p className="inline-block px-4 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-blue-100 text-blue-600 mb-4">
          Our Jobs
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Find Your Overseas Job
        </h1>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        loop={true}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          440: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {jobCards.map((job) => (
          <SwiperSlide key={job.id}>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
              
              {/* Image */}
              <div className="relative h-44  sm:h-48 md:h-52 bg-gray-100">
                <Image
                  src={job.image}
                  alt={job.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 text-center">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                  Jobs in {job.title}
                </h3>

                <button className="sm:mt-3 mt-1 text-sm text-blue-600 font-medium hover:underline">
                  Explore Jobs →
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      <div className="flex justify-center gap-4 sm:mt-10 mt-2">
        <button className="prev-btn w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow">
          <ChevronLeft size={20} />
        </button>

        <button className="next-btn w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}