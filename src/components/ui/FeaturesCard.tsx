import { Link } from "react-router-dom";
import { Button } from "./button";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
type TProps = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
  ratings: number;
  description: string;
  image: string;
};

const FeaturesCard = ({ _id, image }: TProps) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-up" className="relative group">
      <img src={image} alt="product" className="w-full h-auto" />

      {/* Black overlay that appears on hover */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

      {/* Button that becomes visible on hover */}
      <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link to={`/products/${_id}`}>
          <Button className="bg-[#c19d60] font-semibold hover:bg-[#c19d60]">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturesCard;
