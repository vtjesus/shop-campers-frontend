/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDeleteProductMutation } from "@/redux/api/api";
import EditProduct from "./EditProduct";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
type TProduct = {
  _id: string;
  name: string;
  price: number;
  category: "tents" | "shelter" | "camp-cooking" | "dining" | "backpacks";
  image: string;
  quantity: number;
  description: string;
  ratings: number;
};

type ProductRowProps = {
  product: TProduct;
};

const ProductRow = ({ product }: ProductRowProps) => {
  const [deleteProduct] = useDeleteProductMutation();

  const handleDeleteProduct = async () => {
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
        deleteProduct(product._id);

        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <tr
      data-aos="zoom-in"
      className="border-b border-gray-200 hover:bg-gray-100"
    >
      <td className="py-3 px-6 text-left">
        <img
          src={product.image}
          alt={product.name}
          className="w-12 h-12 rounded"
        />
      </td>
      <td className="py-3 px-6 text-left">{product.name}</td>
      <td className="py-3 px-6 text-left">${product.price.toFixed(2)}</td>
      <td className="py-3 px-6 text-left capitalize">{product.category}</td>
      <td className="py-3 px-6 text-center space-x-6 md:space-x-0 flex justify-evenly">
        <EditProduct product={product} />
        <button
          onClick={handleDeleteProduct}
          className="text-red-600 hover:text-red-800"
        >
          <FaTrashAlt className="size-6" />
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
