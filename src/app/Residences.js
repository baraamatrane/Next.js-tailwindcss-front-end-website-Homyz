"use client";
import Image from "next/image";
import r1 from "../../public/r1.png";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

const Residences = () => {
  const swiper = useSwiper();
  const nexto = () => {
    swiper?.slideNext();
  };

  const prevo = () => {
    swiper?.slidePrev();
  };
  const Resid = [
    {
      name: "Aliva Priva Jardin",
      price: "47,043",
      detail:
        "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
      image: r1,
    },
    {
      name: "Asatti Garden City",
      price: "66,353",
      detail:
        "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
      image: r1,
    },
    {
      name: "Citralan Puri Serang",
      price: "35,853",
      detail:
        "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
      image: r1,
    },
    {
      name: "Aliva Priva Jardin",
      price: "47,043",
      detail:
        "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
      image: r1,
    },
    {
      name: "Asatti Garden City",
      price: "66,353",
      detail:
        "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
      image: r1,
    },
    {
      name: "Citralan Puri Serang",
      price: "35,853",
      detail:
        "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
      image: r1,
    },
  ];
  return (
    <div className="w-full p-9 space-y-4 relative">
      <div className="space-y-2">
        <h3 className="text-orange-400 md:text-2xl text-xl __className_dee427 font-semibold">
          Best Choices
        </h3>
        <h3 className="text-[#1f3e72] md:text-3xl text-2xl __className_dee427 font-[700]">
          Popular Residencies
        </h3>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        breakpoints={{
          480: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          750: { slidesPerView: 3 },
          1100: { slidesPerView: 4 },
        }}
        className="overflow-hidden md:h-[420px]"
      >
        {Resid.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="space-y-4 max-w-[260px] p-2 hover:scale-105 cursor-pointer transition-all hover:bg-gradient-to-t hover:from-blue-100 hover:rounded-md hover:shadow-md hover:to-white">
              <Image
                src={item.image}
                alt="r1"
                width="400"
                height="400"
                className="w-60 h-auto"
              />
              <h3 className="text-[#8c8b8b] md:text-xl text-lg __className_dee427 font-semibold">
                <span className="text-orange-400">$</span>
                {item.price}
              </h3>
              <h3 className="text-[#1f3e72] md:text-2xl text-xl __className_dee427 font-bold">
                {item.name}
              </h3>
              <span className="text-[#8c8b8b] md:text-[11px] text-[9px] text-start __className_dee427 font-medium">
                {item.detail}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="md:absolute flex justify-center items-center md:top-11 md:right-5 p-2 space-x-4">
        <button
          onClick={() => prevo()}
          className="bg-white shadow-lg w-10 h-10 text-2xl rounded-lg text-blue-600 __className_dee427 font-semibold"
        >
          &lt;
        </button>
        <button
          onClick={() => nexto()}
          className="bg-blue-100 shadow-lg w-10 h-10 text-2xl rounded-lg text-blue-600 __className_dee427 font-semibold"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Residences;
