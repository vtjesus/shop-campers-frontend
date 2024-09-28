import { useEffect } from "react";
import { Link } from "react-router-dom";
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

const CategoryCards = ({ _id, image, name, price }: TProps) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="fade-left"
      className="flex items-center gap-6 border rounded"
    >
      <img className="w-40" src={image} alt={name} />
      <div className="space-y-2 mt-6 ">
        <Link to={`/products/${_id}`}>
          <h3 className="text-lg font-semibold hover:text-[#f56e29] transition-all">
            {name}
          </h3>
        </Link>
        <p className="text-orange-600 font-bold">${price}</p>
      </div>
    </div>
  );
};

export default CategoryCards;
