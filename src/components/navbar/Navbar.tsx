import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
import HeartSvg from "../ui/HeartSvg";
import { useAppSelector } from "@/redux/features/hooks";

const Navbar = () => {
  const cartItems = useAppSelector((state) => state.cart.products);

  const navLinks = (
    <>
      <li className="font-bold relative border-b lg:border-b-2 lg:border-transparent hover:border-[#f56e29] hover:text-[#f56e29] transition duration-500 ">
        <NavLink to={"/"}>Home </NavLink>
      </li>
      <li className="font-bold relative border-b lg:border-b-2 lg:border-transparent hover:border-[#f56e29] hover:text-[#f56e29] transition duration-500 ">
        <NavLink to={"/products"}>Products</NavLink>
      </li>
      <li className="font-bold relative border-b lg:border-b-2 lg:border-transparent hover:border-[#f56e29] hover:text-[#f56e29] transition duration-500 ">
        <NavLink to={"/products-management"}>Product Management</NavLink>
      </li>
      <li className="font-bold relative border-b lg:border-b-2 lg:border-transparent hover:border-[#f56e29] hover:text-[#f56e29] transition duration-500 ">
        <NavLink to={"/about"}>About Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-white text-[#000000] py-4 font-Jost">
      <div className="navbar container mx-auto">
        {/* nav start content  */}
        <div className="navbar-start">
          <div className="dropdown">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer"
                  tabIndex={0}
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
              </div>

              <div className="drawer-side z-10">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>

                <NavLink to={"/"} className="z-20 px-4 pt-2 pb-2">
                  <img className=" w-40 " src={logo} alt="" />
                </NavLink>

                <ul className="menu p-4 w-80 min-h-full bg-white py-14">
                  {navLinks}
                </ul>
              </div>
            </div>
          </div>
          <NavLink to={"/"}>
            <img className="w-40" src={logo} alt="" />
          </NavLink>
        </div>

        {/* nav center content  */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 ">{navLinks}</ul>
        </div>

        {/* nav end content  */}
        <div className="navbar-end gap-3">
          <Link to={"/wish"}>
            <HeartSvg />
          </Link>
          <Link to={"/cart"}>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cartItems.length}
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
