"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navbar, setnavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`sticky top-0 flex justify-between md:justify-evenly items-cente p-4 navbar ${
        scrolled ? "bg-[#282727]" : "bg-transparent"
      } z-50`}
    >
      <Image src={logo} alt="logo" width="100" height="100" />
      <div className="md:flex hidden items-center gap-7 text-[#c6c5c5] text-base __className_dee427 font-normal">
        <a
          className="hover:text-blue-600 __className_dee427"
          href="#Residencies"
        >
          Residencies
        </a>
        <a className="hover:text-blue-600 __className_dee427" href="#Our value">
          Our value
        </a>
        <a
          className="hover:text-blue-600 __className_dee427"
          href="#Contact us"
        >
          Contact us
        </a>
        <a
          className="hover:text-blue-600 __className_dee427"
          href="#Get Started"
        >
          Get Started
        </a>{" "}
        <button className="bg-gradient-to-bl to-blue-600 from-sky-700 text-white rounded-[4px] text-base p-2 w-24 hover:bg-[#3b6edf]">
          Contact
        </button>
      </div>
      {navbar ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-auto text-white hover:text-blue-600 md:hidden block"
          onClick={() => setnavbar((prev) => !prev)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={() => setnavbar((prev) => !prev)}
          className="w-10 h-auto text-white hover:text-blue-600 md:hidden block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      )}{" "}
      <div
        className={`absolute ${
          navbar ? "right-6" : "hidden"
        } w-44 lg:w-44 top-16 md:hidden bg-white shadow-lg p-6 rounded-md flex flex-col items-center gap-7 text-black text-lg font-medium __className_dee427`}
        style={{ transition: "all 1s" }}
      >
        <a className="hover:text-blue-600" href="#Residencies">
          Residencies
        </a>
        <a className="hover:text-blue-600" href="#Our value">
          Our value
        </a>
        <a className="hover:text-blue-600" href="#Contact us">
          Contact us
        </a>
        <a className="hover:text-blue-600" href="#Get Started">
          Get Started
        </a>{" "}
        <button className="bg-blue-600 text-white rounded-[4px] text-base p-2 w-24 hover:bg-[#3b6edf]">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
