import Image from "next/image";
import Services from "../../components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Fari Global Overseas",
  description: "Explore our services. Showcasing our work and achievements across different sectors."
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <div className="relative h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/pages/services.png"
            alt="About Us"
            fill
            className="object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-black text-white mb-1">
            Our Services
          </h1>
          <div className="mb-3">
            <p className="text-md md:text-xl text-slate-200 font-light">
              <a href="/">Home</a> /{" "}
              <span className="underline font-semibold text-accent">
                Our Services
              </span>
            </p>
          </div>
          <p className="text-md md:text-xl text-gray-300 ">
           Empowering Your Success Through Our Services
          </p>
        </div>
      </div>
      <Services />
    </div>
  );
}
