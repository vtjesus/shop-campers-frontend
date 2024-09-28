import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-10">
      <div className="flex items-center justify-center">
        <div className=" space-y-6">
          <h2 className="text-6xl font-bold">Travel Experience</h2>
          <p className="font-semibold text-gray-500">Sale up to 10% off all</p>

          <Link to={"/products"}>
            <Button className=" bg-[#c19d60] outline-none border-none mt-8 font-semibold px-8">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <img
          data-aos="fade-left"
          className="rounded transform transition-transform duration-500 ease-in-out hover:scale-110"
          src="https://campic-store-demo.myshopify.com/cdn/shop/files/banner-v3-img.jpg?v=1690770374"
          alt="Travel Experience"
        />
      </div>
    </div>
  );
};

export default Experience;
