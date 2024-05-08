"use client";
import Image from "next/image";
import Bg from "../../public/hero.png";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div className="flex mb-16 lg:flex-row flex-col w-full justify-around items-center">
      <div className="md:w-1/2 w-full flex flex-col gap-10 lg:items-center p-4">
        <div className="relative z-10">
          <div className="absolute lg:right-[27%] right-[40%] -top-5 w-16 h-16 rounded-full -z-10">
            <div className="bg-gradient-to-bl from-yellow-400 to-orange-500 rounded-full w-full h-full"></div>
          </div>
          <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: "spring" }}
            className="__className_dee427 text-white font-bold md:text-6xl sm:text-5xl text-4xl"
          >
            Discover <br /> Most Suitable
            <br /> Property
          </motion.h1>{" "}
        </div>
        <div className="text-start">
          {" "}
          <span className="text-[#c6c5c5] md:text-base text-xs text-start __className_dee427 font-normal">
            Find a variety of properties that suit you very easilty
          </span>
          <br />
          <span className="text-[#c6c5c5] md:text-base text-xs text-start __className_dee427 font-normal">
            {" "}
            Forget alldifficulties in finding a residence for you.
          </span>
        </div>

        <div className="flex justify-between items-center rounded-md md:w-[410px] w-80 p-3 bg-white border-2 border-[#cfcfd8] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="lg:w-10 w-8 h-auto text-blue-600"
          >
            <path
              fillRule="evenodd"
              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            className="outline-none w-20 border-none text-base __className_dee427 font-normal"
            type="text"
          />
          <button
            type="submit"
            className="bg-gradient-to-bl __className_dee427 font-normal to-blue-600 from-sky-700 text-white rounded-[4px] text-base p-2 w-24 hover:bg-[#3b6edf]"
          >
            Search
          </button>
        </div>
        <div className="flex justify-between gap-8 items-center">
          <div className="">
            <div className="flex justify-center gap-1">
              <CountUp
                end={9000}
                start={8800}
                duration={2}
                className="numeric text-center lg:text-3xl text-2xl font-normal text-white __className_dee427"
              />
              <span className="text-[#ffa500] lg:text-3xl text-2xl font-normal __className_dee427">
                +
              </span>
            </div>
            <span className="text-[#8c8b8b] lg:text-sm text-center text-[11px] __className_dee427 font-normal">
              Premium Product
            </span>
          </div>
          <div className="">
            <div className="flex justify-center md:gap-3 gap-1">
              <CountUp
                end={2000}
                start={1800}
                duration={2}
                className="numeric text-center lg:text-3xl text-2xl font-normal text-white __className_dee427"
              />

              <span className="text-[#ffa500] lg:text-3xl text-2xl font-normal __className_dee427">
                +
              </span>
            </div>{" "}
            <span className="text-[#8c8b8b] lg:text-sm text-center text-[10px] __className_dee427 font-normal">
              Happy Customer
            </span>
          </div>
          <div className="">
            <div className="flex justify-center gap-1">
              <CountUp
                end={28}
                start={17}
                duration={2}
                className="numeric text-center lg:text-3xl text-2xl font-normal text-white __className_dee427"
              />

              <span className="text-[#ffa500] lg:text-3xl text-2xl font-normal __className_dee427">
                +
              </span>
            </div>{" "}
            <span className="text-[#8c8b8b] lg:text-sm text-center text-[10px] __className_dee427 font-normal">
              Awards Winning
            </span>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ x: "2rem", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, type: "spring" }}
        className="w-full flex justify-center md:w-1/2"
      >
        <div className=" lg:w-[450px] lg:h-[550px] w-80 h-[400px] border-8 overflow-hidden border-[#302e2d] bg-white rounded-t-full">
          <Image
            src={Bg}
            alt="bg"
            width="450"
            height="550"
            className="lg:w-[450px] h-full w-80"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
