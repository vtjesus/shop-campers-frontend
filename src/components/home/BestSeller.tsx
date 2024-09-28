import { Button } from "../ui/button";
import BestSellingProductsCard from "../ui/BestSellingProductsCard";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "@/redux/api/api";

type TProduct = {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  ratings: number;
  quantity: number;
};
const BestSeller = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  const products = data?.data || [];
  const bestSellingProducts = products.slice(0, 8);
  return (
    <>
      {isLoading ? (
        <div className="text-center py-32">Loading products...</div>
      ) : (
        <div className="space-y-10">
          <div className="text-center py-10 space-y-3">
            <h2 className="text-3xl font-bold">Best Seller</h2>
            <p className="text-sm text-gray-500">
              Order online and have your products delivered to your closest
              store
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {bestSellingProducts.map((product: TProduct) => (
              <BestSellingProductsCard key={product._id} {...product} />
            ))}
          </div>
          <div className="text-center">
            <Link to={"/products"}>
              <Button className="btn  bg-[#c19d60] outline-none border-none mt-8 font-semibold px-8">
                View All
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default BestSeller;
