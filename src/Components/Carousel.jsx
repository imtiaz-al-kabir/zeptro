import { useContext, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { DataContext } from "../Provider/DataContext";
import Category from "./Category";

const Carousel = () => {
  const { data, fetchAllProducts } = useContext(DataContext);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <div className="w-full overflow-hidden ">
      <Slider {...settings}>
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10 md:py-18"
            >
              <div className="h-[600px] flex flex-col md:flex-row gap-10 justify-center  my-20 md:my-0 items-center px-4">
                <div className="md:space-y-6 space-y-3">
                  <h3 className="text-red-500 font-semibold font-sans text-sm">
                    Powering Your World with the Best in Products
                  </h3>
                  <h1 className="md:text-4xl text-xl font-bold uppercase line-clamp-2 md:line-clamp-3 md:w-[500px] text-white">
                    {item.title}
                  </h1>
                  <p className="md:w-[500px] line-clamp-3 text-gray-400 pr-7">
                    {item.description}
                  </p>
                  <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2">
                    Shop Now
                  </button>
                </div>
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-full size-[250px] md:size-[500px]   object-contain hover:scale-105 transition-all shadow-2xl shadow-red-400"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      <Category />
    </div>
  );
};

export default Carousel;
