import { FaTrashAlt } from "react-icons/fa";
import { useAppDispatch } from "@/redux/features/hooks";
import {
  changeProductQUantity,
  removeFromCart,
} from "@/redux/features/cart/cartSlice";
import Swal from "sweetalert2";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
type CartItemProps = {
  _id: string;
  name: string;
  price: number;
  selectedQuantity: number;
  quantity: number;
  image: string;
};

const CartItems = ({
  image,
  name,
  price,
  selectedQuantity,
  quantity,
  _id,
}: CartItemProps) => {
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(_id));

        Swal.fire({
          title: "Removed!",
          text: "Your product has been removed from cart.",
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <tr data-aos="fade-up" className="border-b">
      {/* Product Column */}
      <td className="py-4 flex flex-col md:flex-row gap-2 items-center justify-start">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 md:w-16 md:h-16 rounded"
        />
        <span className="text-sm md:text-base">{name}</span>
      </td>

      {/* Price */}
      <td className="py-4 text-sm md:text-base">${price.toFixed(2)}</td>

      {/* Quantity Input */}
      <td className="py-4">
        <input
          type="number"
          value={selectedQuantity}
          onChange={(e) => {
            dispatch(
              changeProductQUantity({
                _id,
                selectedQuantity: parseInt(e.target.value),
              })
            );
          }}
          className="border rounded w-16 text-center"
          min="1"
          max={quantity}
        />
      </td>

      {/* Total Price */}
      <td className="py-4 text-sm md:text-base">
        ${(price * selectedQuantity).toFixed(2)}
      </td>

      {/* Remove Button */}
      <td className="py-4">
        <button
          className="text-red-600 hover:text-red-800"
          onClick={handleRemoveFromCart}
        >
          <FaTrashAlt size={20} />
        </button>
      </td>
    </tr>
  );
};

export default CartItems;
