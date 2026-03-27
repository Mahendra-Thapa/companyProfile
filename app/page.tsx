import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Process from "../components/Process";
import JobCarousel from "@/components/jobCarousel";
import TestimonialSection from "@/components/Testimonail";
import HomeServices from "@/components/HomeService";
import FaqSection from "@/components/FaqSection";
import CallToAction from "@/components/CallToAction";
import Progress from "@/components/Progress";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Progress />
      <About />
      <HomeServices />
      {/* <Process /> */}
      <JobCarousel />
      <FaqSection />
      <TestimonialSection />
      <CallToAction />
    </main>
  );
}
