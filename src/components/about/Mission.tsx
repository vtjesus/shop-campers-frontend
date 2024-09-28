import { useEffect } from "react";
import Container from "../ui/Container";
import Aos from "aos";
import "aos/dist/aos.css";
const Mission = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Container>
      <div className="py-6">
        <div className="flex flex-col md:flex-row justify-between gap-3 items-center">
          <div className="flex-1 text-center md:text-left">
            <div className="pb-10 space-y-2">
              <h1 className="text-4xl font-bold">Our Mission</h1>
              <p className="text-gray-500 text-sm">
                ----- THE HIGH STRESS FAVOUTIRE
              </p>
            </div>
            <p className="text-gray-400 w-[90%] mx-auto md:mx-0">
              At Campic, our mission is to equip camping enthusiasts with the
              highest quality gear and innovative products that enhance their
              outdoor experiences. We aim to inspire and support adventure by
              offering a wide range of essential items for all levels of
              campers, ensuring they are well-prepared to enjoy nature.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              data-aos="fade-left"
              className="transform transition-transform duration-500 ease-in-out hover:scale-110"
              src="https://hicam-store-newdemo.myshopify.com/cdn/shop/files/a1-1.jpg?v=1719909157&width=998"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-3 justify-between items-center mt-6">
          <div className="flex-1 text-center md:text-left">
            <div className="pb-10 space-y-2">
              <h1 className="text-4xl font-bold">Our Values</h1>
              <p className="text-gray-500 text-sm">
                ----- THE HIGH STRESS FAVOUTIRE
              </p>
            </div>
            <p className="text-gray-400 w-[90%] mx-auto md:mx-0">
              At Campic, we value a deep connection to nature, quality
              craftsmanship, and sustainability. We believe in empowering our
              customers by providing reliable and eco-friendly camping
              solutions. Our commitment to excellence and community drives us to
              foster a love for the outdoors while preserving it for future
              generations.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              data-aos="fade-right"
              className="transform transition-transform duration-500 ease-in-out hover:scale-110"
              src="https://hicam-store-newdemo.myshopify.com/cdn/shop/files/a1-2.jpg?v=1719909163&width=998"
              alt=""
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Mission;
