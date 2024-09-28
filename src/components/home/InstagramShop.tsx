import { useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
const InstagramShop = () => {
  const images = [
    "https://campic-store-demo.myshopify.com/cdn/shop/files/instagram1.jpg?v=17881531025014822236",
    "https://campic-store-demo.myshopify.com/cdn/shop/files/instagram3.jpg?v=2508604475887328975",
    "https://campic-store-demo.myshopify.com/cdn/shop/files/instagram2.jpg?v=5404852605928399226",
    "https://campic-store-demo.myshopify.com/cdn/shop/files/instagram4.jpg?v=14697948523138533043",
    "https://campic-store-demo.myshopify.com/cdn/shop/files/instagram5.jpg?v=2443814745766223143",
    "https://campic-store-demo.myshopify.com/cdn/shop/files/instagram2.jpg?v=5404852605928399226",
    "https://campic-store-demo.myshopify.com/cdn/shop/files/instagram7.jpg?v=14633565151895174854",
    "https://campic-store-demo.myshopify.com/cdn/shop/files/instagram8.jpg?v=16811629125496910335",
    "https://campic-store-demo.myshopify.com/cdn/shop/files/instagram9.jpg?v=1245227725529795684",
    "https://campic-store-demo.myshopify.com/cdn/shop/files/instagram10.jpg?v=1742950213355118353",
  ];

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Instagram Shop</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg"
          >
            <img
              data-aos="zoom-in"
              src={img}
              alt={`Instagram shop ${index}`}
              className="w-full h-full object-cover transform transition-transform duration-[2s] ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 ease-in-out flex justify-center items-center">
              <a href="https://www.instagram.com/">
                <FaInstagram className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-[#ff6f29]" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramShop;
