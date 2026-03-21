import CompanyValues from "@/components/CompanyValues";
import About from "../../components/About";
import ChairmanMessage from "../../components/ChairmanMessage";

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About />
      <CompanyValues />
      <ChairmanMessage />
    </div>
  );
}
