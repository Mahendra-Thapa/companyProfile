import Image from "next/image";
import Countries from "../../components/Countries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Countries | Fari Global Overseas",
  description: "Explore opportunities across different countries with Fari Global Overseas. Your gateway to global markets."
};

export default function CountriesPage() {
  return (
    <div className="pt-20">
      <div className="relative h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/pages/countries.png"
            alt="countries"
            fill
            className="object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-black text-white ">
            Countries
          </h1>
          <div className="mb-2">
            <p className="text-md md:text-xl text-slate-200 font-light">
              <a href="/">Home</a> /{" "}
              <span className="underline font-semibold text-accent">
                Countries
              </span>
            </p>
          </div>
          <p className="text-md md:text-xl text-gray-300 ">
            Explore Opportunities Across Different Countries
          </p>
        </div>
      </div>
      <Countries />
    </div>
  );
}
