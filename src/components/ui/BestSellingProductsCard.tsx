import { Link } from "react-router-dom";
import CartSvg from "./CartSvg";
import SearchSvg from "./SearchSvg";
import { useEffect, useState } from "react";
import HeartSvg from "./HeartSvg";
import { useAppDispatch } from "@/redux/features/hooks";
import { addToCart } from "@/redux/features/cart/cartSlice";
import Swal from "sweetalert2";
import Aos from "aos";
import "aos/dist/aos.css";
type TBestSellingProductsProps = {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  quantity: number;
  ratings: number;
};

const BestSellingProductsCard = ({
  _id,
  name,
  price,
  description,
  category,
  quantity,
  ratings,
  image,
}: TBestSellingProductsProps) => {
  const [wish, setWish] = useState(false);
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id,
        name,
        price,
        description,
        category,
        image,
        quantity,
        ratings,
      })
    );
    Swal.fire({
      title: "Success!",
      text: "Product added to cart",
      icon: "success",
    });
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="relative rounded-lg overflow-hidden group "
    >
      <img src={image} alt={name} className="w-full rounded-lg" />

      {/* Icons will fade in and slide in from the right */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col space-y-3 opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">
        <button
          onClick={() => setWish(!wish)}
          className={`p-2 rounded-full shadow-md ${
            wish ? "bg-red-500" : "bg-white"
          }`}
        >
          <HeartSvg />
        </button>
        <button
          onClick={handleAddToCart}
          className="bg-white p-2 rounded-full shadow-md"
        >
          <CartSvg />
        </button>
        <button className="bg-white p-2 rounded-full shadow-md">
          <SearchSvg />
        </button>
      </div>

      <div className="space-y-2 mt-6">
        <Link to={`/products/${_id}`}>
          <h3 className="text-lg font-semibold group-hover:text-[#f56e29] transition-all">
            {name}
          </h3>
        </Link>
        <p className="text-orange-600 font-bold">${price}</p>
      </div>
    </div>
  );
};

export default BestSellingProductsCard;
