import React from "react";

const Getstarted = () => {
  return (
    <div className="md:p-8 p-4">
      {" "}
      <div className="p-8 w-full flex flex-col justify-center items-center bg-blue-600 border-[6px] rounded-lg border-[#5d77d6] space-y-6">
        <h3 className="text-white md:text-3xl text-center text-2xl __className_dee427 font-semibold">
          Get started with Homyz
        </h3>
        <h4 className="text-blue-300 md:text-sm text-xs text-center __className_dee427 font-medium">
          Subscribe and find super attractive price quotes from us.
          <br />
          Find your residence soon
        </h4>
        <button className="p-3 border-2 hover:scale-110 transition-all text-white md:text-sm text-xs w-28 text-center __className_dee427 font-medium border-white bg-blue-100 bg-opacity-50 rounded-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Getstarted;
