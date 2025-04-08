import Image from "next/image";
import logo from "../../public/logo2.png";

const Footer = () => {
  return (
    <div className="p-8 flex md:flex-row flex-col md:justify-between justify-center items-center md:space-y-0 space-y-6">
      <div className="space-y-4 flex flex-col md:justify-normal justify-center md:items-start items-center">
        <Image
          src={logo}
          alt="logo"
          width="100"
          height="100"
          className="w-28 h-auto"
        />
        <h4 className="text-[#b0b0b0] md:text-sm text-xs text-start __className_dee427 font-medium">
          Our vision is to make all people <br /> the best place to live for
          them.
        </h4>
      </div>
            <div className="flex md:justify-normal justify-center md:items-start items-center">
        <h4 className="text-[#b0b0b0] md:text-sm text-xs text-start __className_dee427 font-medium">
          © 2025 BaraeMatrane All Rights Reserved.
        </h4>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-[#1f3e72] text-center md:text-4xl text-2xl __className_dee427 font-bold">
            Information
          </h3>
          <h4 className="text-[#b0b0b0] text-center md:text-sm text-xs __className_dee427 font-medium">
            145 New York, FL 5467, USA
          </h4>
          <div className="flex gap-4 items-center">
            <h4 className="text-black md:text-base text-sm text-start __className_dee427 font-medium">
              Property
            </h4>
            <h4 className="text-black md:text-base text-sm text-start __className_dee427 font-medium">
              Services
            </h4>
            <h4 className="text-black md:text-base text-sm text-start __className_dee427 font-medium">
              Products
            </h4>{" "}
            <h4 className="text-black md:text-base text-sm text-start __className_dee427 font-medium">
              About Us
            </h4>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
