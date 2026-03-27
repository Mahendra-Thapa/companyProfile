import Contact from "../../components/Contact";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Fari Global Overseas",
  description: "Connect with Fari Global Overseas for inquiries, support, and partnership opportunities. We’re here to help you anytime."
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="relative h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/pages/contactpage.png"
            alt="About Us"
            fill
            className="object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-black text-white ">
            Contact Us
          </h1>
          <div className="mb-2">
            <p className="text-md md:text-xl text-slate-200 font-light">
              <a href="/">Home</a> /{" "}
              <span className="underline font-semibold text-accent">
                Contact Us
              </span>
            </p>
          </div>
          <p className="text-md md:text-xl text-gray-300 ">
             We’re Here to Help You Anytime
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
}
