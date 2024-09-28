/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductFiltering from "@/components/products/ProductFiltering";
import Container from "@/components/ui/Container";
import PagesBanner from "@/components/ui/PagesBanner";
import ProductsCard from "@/components/ui/ProductsCard";
import { useGetProductsQuery } from "@/redux/api/api";
import { useAppSelector } from "@/redux/features/hooks";

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

const Products = () => {
  const category = useAppSelector((state) => state.filter.category);
  const price = useAppSelector((state) => state.filter.price);
  const sorting = useAppSelector((state) => state.filter.sorting);
  const search = useAppSelector((state) => state.filter.search);

  const query: Record<string, any> = {};
  query["category"] = category;
  query["price"] = price;
  query["sorting"] = sorting;
  query["search"] = search;
  const { data, error, isLoading } = useGetProductsQuery({ ...query });

  const products = data?.data || [];

  return (
    <>
      <PagesBanner currentPage="Products" />
      <Container>
        <ProductFiltering />
        <hr />
        {/* Conditional rendering starts here */}
        {isLoading ? (
          <div className="text-center py-32">Loading products...</div>
        ) : error ? (
          <div className="text-center py-32">Error fetching products</div>
        ) : products.length === 0 ? (
          <div className="text-center py-32">No products available</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 py-10">
            {products.map((product: TProduct) => (
              <ProductsCard key={product._id} {...product} />
            ))}
          </div>
        )}
      </Container>
    </>
  );
};

export default Products;
