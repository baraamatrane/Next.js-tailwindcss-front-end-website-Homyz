import Image from "next/image";
import prologis from "../../public/prologis.png";
import tower from "../../public/tower.png";
import reality from "../../public/realty.png";
import equinix from "../../public/equinix.png";
const Companies = () => {
  const Images = [prologis, tower, equinix, reality];
  return (
    <div className="w-full p-8 flex md:flex-row flex-col gap-6 items-center md:justify-between justify-center">
      {Images.map((item, i) => (
        <Image
          key={i}
          src={item}
          alt={i}
          height="150"
          width="100"
          className="w-36 h-auto"
        />
      ))}
    </div>
  );
};

export default Companies;
