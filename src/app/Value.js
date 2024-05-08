"use client";
import Image from "next/image";
import Bg from "../../public/value.png";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Value = () => {
  const data = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="md:w-9 w-7 h-auto p-2 rounded-md text-blue-600 bg-blue-100 shadow-lg"
        >
          <path
            fillRule="evenodd"
            d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      heading: (
        <h3 className="text-[#1f3e72] md:text-lg text-sm font-semibold">
          Best interest rates on the market
        </h3>
      ),
      detail:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="md:w-9 w-7 h-auto p-2 rounded-md text-blue-600 bg-blue-100 shadow-lg"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      heading: (
        <h3 className="text-[#1f3e72] md:text-lg text-sm font-semibold">
          Prevent unstable price
        </h3>
      ),
      detail:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="md:w-9 w-7 h-auto p-2 rounded-md text-blue-600 bg-blue-100 shadow-lg"
        >
          <path
            fillRule="evenodd"
            d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      heading: (
        <h3 className="text-[#1f3e72] md:text-lg text-sm font-semibold">
          Best price on the market
        </h3>
      ),
      detail:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
  ];
  return (
    <div className="flex md:flex-row flex-col w-full md:space-x-4 space-y-6 justify-between items-start lg:p-0 p-4">
      <div className="w-full flex justify-center md:w-1/2">
        <div className="w-[500px] lg:h-[530px] h-96 border-8 overflow-hidden border-[#dcdbdb] bg-white rounded-t-full">
          <Image
            src={Bg}
            alt="bg"
            width="450"
            height="550"
            className="lg:w-full h-full w-80"
          />
        </div>
      </div>
      <div className="md:w-1/2 w-full space-y-4 p-2">
        <h3 className="text-orange-400 md:text-2xl text-xl __className_dee427 font-semibold">
          Our Value
        </h3>
        <h3 className="text-[#1f3e72] md:text-3xl text-2xl __className_dee427 font-[700]">
          Value We Give to You
        </h3>
        <h4 className="text-[#908e8e] md:text-sm text-xs text-start __className_dee427 font-medium">
          We always ready to help by providijng the best services for you.
          <br /> We beleive a good blace to live can make your life better
        </h4>
        <Accordion
          allowMultipleExpanded={false}
          preExpanded={["0"]}
          className="space-y-4"
        >
          {data.map((item, i) => (
            <AccordionItem
              key={i}
              uuid={`${i}`}
              className="bg-white shadow-lg w-full space-y-9 md:p-4 p-2 rounded-md"
            >
              <AccordionItemHeading className="w-full flex cursor-pointer justify-between items-center">
                <AccordionItemButton className="w-full bg-transparent flex justify-between items-center">
                  {item.icon} {/* Render the SVG icon JSX element here */}
                  {item.heading} {/* Render the heading JSX element here */}
                  <div className="md:w-9 w-6 h-auto p-2 rounded-md text-blue-600 bg-blue-100 shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-full h-auto rotate-90"
                    >
                      <path d="M3 3.732a1.5 1.5 0 0 1 2.305-1.265l6.706 4.267a1.5 1.5 0 0 1 0 2.531l-6.706 4.268A1.5 1.5 0 0 1 3 12.267V3.732Z" />
                    </svg>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <h4 className="text-[#acabab] md:text-sm text-xs text-start font-medium">
                  {item.detail}
                </h4>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Value;
