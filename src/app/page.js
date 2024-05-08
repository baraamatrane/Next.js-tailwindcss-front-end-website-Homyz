import Image from "next/image";
import Navbar from "./Navbar";
import Header from "./Header";
import Companies from "./Companies";
import Residences from "./Residences";
import Value from "./Value";
import Contact from "./Contact";
import Getstarted from "./Getstarted";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <div className="bg-[#131110] flex flex-col gap-12">
        <div className="absolute bg-white h-64 w-64 opacity-60 rounded-xl top-[10%] left-[5%] filter blur-[100px]"></div>
        <Navbar />
        <Header />
      </div>
      <Companies />
      <Residences />
      <div className="space-y-16">
        <Value />
        <Contact />
        <Getstarted />
      </div>{" "}
      <Footer />
    </div>
  );
}
