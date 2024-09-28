import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useAppSelector } from "@/redux/features/hooks";
import { useEffect } from "react";

const MainLayout = () => {
  const cartItems = useAppSelector((state) => state.cart.products);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (cartItems.length > 0) {
        event.preventDefault();
        event.returnValue =
          "You have items in your cart. Are you sure you want to leave?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cartItems]);
  return (
    <div className="font-Jost">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
