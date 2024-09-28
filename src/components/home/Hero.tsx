import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import sliderOne from "../../assets/images/slideshow.webp";
import sliderTwo from "../../assets/images/slideshow2.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  const slides = [
    {
      img: sliderOne,
      discount: "Get 50% Off",
      title: "Mountain Climbing",
      description:
        "Order online and have your products delivered to your closest store for free",
      buttonText: "Shop Now",
    },
    {
      img: sliderTwo,
      discount: "DISCOUNT 30%",
      title: "Travel Experience",
      description:
        "Order online and have your products delivered to your closest store for free",
      buttonText: "Shop Now",
    },
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      className="h-[60vh] md:h-[90vh] w-full "
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      effect="fade"
      speed={800}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-full">
            <img
              src={slide.img}
              alt="Slide image"
              className="object-center w-full h-full"
            />
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 lg:bottom-12 lg:right-12 bg-black bg-opacity-50 p-4 md:p-6 rounded-md">
              <h2 className="text-lg md:text-xl lg:text-2xl text-white mb-2">
                {slide.discount}
              </h2>
              <p className="text-2xl md:text-4xl lg:text-5xl text-white font-bold mb-4">
                {slide.title}
              </p>
              <p className="text-xs md:text-sm lg:text-base text-white mb-4">
                {slide.description}
              </p>
              <Link to="/products">
                <button className="bg-white text-black py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded hover:bg-[#ffc107] transition">
                  {slide.buttonText}
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
