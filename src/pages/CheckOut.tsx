import { useUpdateProductMutation } from "@/redux/api/api";
import {
  clearCart,
  selectGrandTotalPrice,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/features/hooks";
import { RootState } from "@/redux/store";
import React, { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.products);
  const grandTotal = useSelector((state: RootState) =>
    selectGrandTotalPrice(state)
  );
  const dispatch = useAppDispatch();

  // State for user information
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");

  const [updateProduct] = useUpdateProductMutation();
  const navigate = useNavigate();

  const handleCheckout = async (e: FormEvent) => {
    e.preventDefault();

    const useInfo = {
      email,
      firstName,
      lastName,
      address,
      city,
      state,
      zipCode,
    };
    console.log(useInfo);

    try {
      for (const item of cartItems) {
        const updatedQuantity = item.quantity - item.selectedQuantity;

        await updateProduct({
          _id: item._id,
          quantity: updatedQuantity,
        });
      }

      // Clear the cart
      dispatch(clearCart());
      // After successful checkout, navigate to the success page
      navigate("/success");
    } catch (error) {
      console.error("Error during checkout: ", error);
    }
  };

  return (
    <div className="container mx-auto py-8 border-t px-3 xl:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Details Form */}
        <form
          onSubmit={handleCheckout}
          className="col-span-2 bg-white  shadow-md border rounded-lg p-6 order-2 lg:order-1"
        >
          <h2 className="text-xl font-semibold mb-6">Contact</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium">
              Email or mobile phone number
            </label>
            <input
              type="email"
              className="border rounded-lg w-full p-2 mt-1"
              placeholder="Email or mobile phone number"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mt-2">
              <input type="checkbox" id="news-offers" className="mr-2" />
              <label htmlFor="news-offers">Email me with news and offers</label>
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-6 mb-6">Delivery</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium">
                First Name (optional)
              </label>
              <input
                type="text"
                className="border rounded-lg w-full p-2 mt-1"
                placeholder="First Name"
                value={firstName}
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Last Name</label>
              <input
                type="text"
                className="border rounded-lg w-full p-2 mt-1"
                placeholder="Last Name"
                value={lastName}
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Address</label>
            <input
              type="text"
              className="border rounded-lg w-full p-2 mt-1"
              placeholder="Address"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium">City</label>
              <input
                type="text"
                className="border rounded-lg w-full p-2 mt-1"
                placeholder="City"
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">State</label>
              <input
                type="text"
                className="border rounded-lg w-full p-2 mt-1"
                placeholder="State"
                value={state}
                required
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">ZIP Code</label>
              <input
                type="text"
                className="border rounded-lg w-full p-2 mt-1"
                placeholder="ZIP code"
                value={zipCode}
                required
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-6">
            <input type="checkbox" id="save-info" className="mr-2" />
            <label htmlFor="save-info">
              Save this information for next time
            </label>
          </div>

          <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
          <div className="mb-6">
            <input
              required
              type="radio"
              id="cod"
              name="payment"
              className="mr-2"
            />
            <label htmlFor="cod">Cash on Delivery</label>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700"
          >
            Place Order
          </button>
        </form>

        {/* Cart Summary */}
        <div className="bg-white shadow-md rounded-lg p-6 border space-y-5 order-1 lg:order-2 ml-4 md:ml-0">
          <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item._id} className="flex justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded"
                  />
                  <span className="text-sm">{item.name}</span>
                </div>
                <span className="text-sm">
                  ${(item.price * item.selectedQuantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4">
            <p className="font-semibold">Subtotal ({cartItems.length} items)</p>
            <p>${grandTotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="font-semibold">Shipping</p>
            <p>Enter shipping address</p>
          </div>
          <div className="flex justify-between mt-4 text-lg font-bold">
            <p>Total</p>
            <p>USD ${grandTotal.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
