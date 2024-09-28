import { useGetProductsQuery } from "@/redux/api/api";
import CategoryCards from "../ui/CategoryCards";

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

const Category = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  const products = data?.data || [];

  // Filter products based on category and limit the number of items displayed
  const tents = products
    .filter((product: TProduct) => product.category === "tents")
    .slice(0, 2);
  const shelter = products
    .filter((product: TProduct) => product.category === "shelter")
    .slice(0, 1);
  const cooking = products
    .filter((product: TProduct) => product.category === "camp-cooking")
    .slice(0, 2);
  const dining = products
    .filter((product: TProduct) => product.category === "dining")
    .slice(0, 1);
  const backPacks = products
    .filter((product: TProduct) => product.category === "backpacks")
    .slice(0, 3);

  return (
    <>
      {isLoading ? (
        <div className="text-center py-32">Loading products...</div>
      ) : (
        <div className="space-y-10">
          {/* Category Section Header */}
          <div className="space-y-3 text-center py-20">
            <h2 className="text-3xl font-bold">Categories</h2>
            <p className="text-sm text-gray-500 w-full md:w-[50%] mx-auto">
              Explore our wide range of categories that cover all your camping
              needs. From tents and sleeping bags to cooking gear and outdoor
              apparel, we have everything to make your adventure comfortable and
              enjoyable.
            </p>
          </div>

          {/* Category Wise Product Listing */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-20">
            {/* Tents & Shelter */}
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Tents & Shelter</h2>
                <hr />
              </div>
              {tents.concat(shelter).map((product: TProduct) => (
                <CategoryCards key={product._id} {...product} />
              ))}
            </div>

            {/* Camp Cooking & Dining */}
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Camp Cooking & Dining</h2>
                <hr />
              </div>
              {cooking.concat(dining).map((product: TProduct) => (
                <CategoryCards key={product._id} {...product} />
              ))}
            </div>

            {/* Backpacks & Bags */}
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Backpacks & Bags</h2>
                <hr />
              </div>
              {backPacks.map((product: TProduct) => (
                <CategoryCards key={product._id} {...product} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Category;
