import { useGetProductsQuery } from "@/redux/api/api";
import FeaturesCard from "../ui/FeaturesCard";
type TProduct = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
  ratings: number;
  description: string;
  image: string;
};

const Features = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  const products = data?.data.slice(4, 8) || [];
  return (
    <div className="space-y-10 py-10">
      <div className="space-y-3 text-center">
        <h2 className="text-3xl font-bold">Features</h2>
        <p className="text-sm text-gray-500 w-full  md:w-[50%] mx-auto">
          Our gear offers advanced durability, weather-resistant protection, and
          innovative technology for optimal performance. Designed for comfort
          and mobility, it combines sleek aesthetics with functionality,
          ensuring you're ready for any adventure with confidence and style.
        </p>
      </div>
      {isLoading ? (
        <div className="text-center py-32">Loading products...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product: TProduct) => (
            <FeaturesCard key={product._id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Features;
