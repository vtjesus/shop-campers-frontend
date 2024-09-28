import VideoBlogs from "@/components/home/VideoBlogs";
import Container from "@/components/ui/Container";
import PagesBanner from "@/components/ui/PagesBanner";
import { selectGrandTotalPrice } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/features/hooks";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItems from "@/components/cart/cartItems";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.products);
  const grandTotal = useSelector((state: RootState) =>
    selectGrandTotalPrice(state)
  );

  return (
    <>
      <PagesBanner currentPage="Cart" />
      <Container>
        <div className="grid grid-cols-4 gap-4 py-10">
          {/* Check if there are cart items */}
          {cartItems.length > 0 ? (
            <>
              {/* Cart Table */}
              <div className="w-full bg-white shadow-md border rounded-lg md:p-6 col-span-4 lg:col-span-3">
                <table className="w-full text-center table-fixed">
                  <thead>
                    <tr>
                      <th className="border-b pb-4">Product</th>
                      <th className="border-b pb-4">Price</th>
                      <th className="border-b pb-4">Quantity</th>
                      <th className="border-b pb-4">Total</th>
                      <th className="border-b pb-4">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((product) => (
                      <CartItems key={product._id} {...product} />
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Cart Totals */}
              <div className="mt-8 md:mt-0 bg-white border shadow-md rounded-lg p-6 col-span-4 lg:col-span-1">
                <h2 className="text-lg font-semibold mb-4 text-center">
                  Cart Totals
                </h2>
                <div className="flex justify-between">
                  <p className="font-semibold">Total</p>
                  <p className="text-lg font-bold">${grandTotal.toFixed(2)}</p>
                </div>
                <Link to={"/checkout"}>
                  <button
                    className={`mt-6 w-full py-3 text-white font-bold rounded-lg ${
                      grandTotal > 0
                        ? "bg-orange-600 hover:bg-orange-700"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                    disabled={grandTotal === 0}
                  >
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <div className="col-span-4 md:p-40 flex justify-center items-center bg-white shadow-xl border flex-wrap p-10">
              <p className="text-lg font-bold">No products in the cart.</p>
              <Link to="/products" className="text-blue-500 hover:underline">
                Continue shopping
              </Link>
            </div>
          )}
        </div>
        <VideoBlogs />
      </Container>
    </>
  );
};

export default Cart;
