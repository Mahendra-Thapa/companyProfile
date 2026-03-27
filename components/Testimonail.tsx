"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Elena Rodriguez",
    role: "Software Engineer in Romania",
    content:
      "The process was seamless. I found a great position in Bucharest within two weeks of applying through the portal.",
    avatar: "https://i.pravatar.cc/150?u=elena",
  },
  {
    id: 2,
    name: "Ahmed Al-Sayed",
    role: "Project Manager in Kuwait",
    content:
      "Transitioning to a new country is stressful, but the job listings here were verified and the support was top-notch.",
    avatar: "https://i.pravatar.cc/150?u=ahmed",
  },
  {
    id: 3,
    name: "Ivan Dimitrov",
    role: "Logistics Specialist in Bulgaria",
    content:
      "I highly recommend this platform for anyone looking to work in Eastern Europe. Very reliable and easy to use.",
    avatar: "https://i.pravatar.cc/150?u=ivan",
  },
  {
    id: 4,
    name: "Sophie Dubois",
    role: "UX Designer in France",
    content:
      "The interface made it incredibly easy to filter by remote-friendly roles. I landed my dream job at a tech startup in Paris!",
    avatar: "https://i.pravatar.cc/150?u=sophie",
  },
  {
    id: 5,
    name: "Kenji Tanaka",
    role: "Data Scientist in Japan",
    content:
      "The visa support information provided alongside the job listings was a lifesaver. It made my move to Tokyo much smoother.",
    avatar: "https://i.pravatar.cc/150?u=kenji",
  },
  {
    id: 6,
    name: "Amara Okoro",
    role: "Civil Engineer in UAE",
    content:
      "Verified employers only! It’s rare to find a platform where you don’t have to worry about the legitimacy of the job posts.",
    avatar: "https://i.pravatar.cc/150?u=amara",
  },
  {
    id: 7,
    name: "Lucas Müller",
    role: "Marketing Manager in Germany",
    content:
      "I appreciated the direct communication line with recruiters. It cut down the waiting time significantly compared to other sites.",
    avatar: "https://i.pravatar.cc/150?u=lucas",
  },
  {
    id: 8,
    name: "Priya Sharma",
    role: "HR Consultant in Singapore",
    content:
      "The career resources and interview tips provided were actually useful. I felt well-prepared for every stage of the hiring process.",
    avatar: "https://i.pravatar.cc/150?u=priya",
  },
];

export default function TestimonialSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  // Function to handle dot clicks
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  // Update the dot index when the slide changes
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-blue-900 mb-4">
            What Our Candidates Say
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex">
            {testimonials.map(item => (
              <div key={item.id} className="flex-[0_0_100%] min-w-0 px-4">
                <div className="bg-white rounded-3xl  shadow-blue-900/5  relative ">
                  {/* Decorative Quote Background */}
                  <Quote className="absolute -top-4 -right-4 w-32 h-32 text-blue-50 opacity-50 rotate-12" />

                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className="flex gap-1 mb-8 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>

                    <blockquote className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed mb-2 flex items-center">
                      "{item.content}"
                    </blockquote>

                    <div className="flex flex-col items-center">
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-blue-200 rounded-full blur-md opacity-50 animate-pulse"></div>
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="relative w-20 h-20 rounded-full border-4 border-white object-cover shadow-md"
                        />
                      </div>
                      <h4 className="font-bold text-gray-900 text-xl tracking-tight">
                        {item.name}
                      </h4>
                      <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mt-1">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Interactive Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-10 bg-blue-600"
                  : "w-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
