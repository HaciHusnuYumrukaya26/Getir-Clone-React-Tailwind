import { useState, useEffect } from "react";

import Banners from "../api/banners.json";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


function NextButton({ onClick, className }) {
  return (
    <button className={`${className} text-purple-700`} onClick={onClick}>
      <IoIosArrowForward size={22} />
    </button>
  );
}
function PrevButton({ onClick, className }) {
  return (
    <button className={`${className} text-purple-700`} onClick={onClick}>
      <IoIosArrowBack size={22} />
    </button>
  );
}

function Campaigns() {
  const [banners, setBanners] = useState([]);


  useEffect(() => {
    setBanners(Banners);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        className="sm:container overflow-hidden md:overflow-visible mx-auto px-0"
      >
        <span className=" text-opacity-30 hover:text-red-600 font-semibold hidden sm:block text-sm mb-3">
          Kampanyalar
        </span>
       <div className="flex flex-row-reverse justify-between items-center  sm:flex-wrap md:flex-nowrap  sm:gap-3">
          {banners &&
            banners.map((banner) => (
              <div key={banner.id} className="px-1">
                <img src={banner.image} alt="" className="w-full sm:rounded-lg " />
              </div>
            ))}
     </div>
      </div>
    </>
  );
}

export default Campaigns;
