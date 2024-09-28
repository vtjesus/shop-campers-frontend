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

const ProductsCard = ({ _id, name, price, image }: TProps) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="card card-compact bg-base-100  shadow-xl"
    >
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/products/${_id}`}>
            <Button className="bg-[#c19d60]">View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
