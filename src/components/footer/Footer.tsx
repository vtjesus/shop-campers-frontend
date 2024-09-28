import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 bg-[#000000] sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="footer grid-cols-2  md:grid-cols-4 p-10  text-neutral-content rounded">
          <aside>
            <h2 className="text-lg lg:text-5xl font-bold">Campic</h2>
            <p>
              Campic Ltd.
              <br />
              Your trusted shop for camping gear and adventures.
            </p>
          </aside>
          <nav>
            <header className="text-xl text-white uppercase font-semibold">
              About
            </header>
            <Link to="/" className="link link-hover">
              Home
            </Link>
            <Link to="/products" className="link link-hover">
              All Products
            </Link>
            <Link to="/contact" className="link link-hover">
              Contact
            </Link>
            <Link to="/contact" className="link link-hover">
              Manage Product
            </Link>
          </nav>
          <nav>
            <header className="text-xl text-white uppercase font-semibold">
              Shop
            </header>
            <Link to="/orders" className="link link-hover">
              Support Center
            </Link>
            <Link to="/wishlist" className="link link-hover">
              Delivery & Returns
            </Link>
            <Link to="/profile" className="link link-hover">
              Products Return
            </Link>
            <Link to="/profile" className="link link-hover">
              Wholesale Policy
            </Link>
          </nav>
          <nav>
            <header className="text-xl text-white uppercase font-semibold">
              Legal
            </header>
            <Link to="/terms" className="link link-hover">
              Terms of Use
            </Link>
            <Link to="/privacy" className="link link-hover">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="link link-hover">
              Cookie Policy
            </Link>
          </nav>
        </div>

        <hr className="mt-16 mb-10 border-gray-800" />

        <div className="flex flex-wrap items-center justify-between">
          <div className="flex gap-2">
            <h2 className="text-white text-3xl">Campic</h2>
          </div>

          <ul className="flex items-center space-x-3 md:order-3">
            <li>
              <a
                href="https://facebook.com"
                title="Facebook"
                className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                title="LinkedIn"
                className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                title="Twitter"
                className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                title="Instagram"
                className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>

          <p className="w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2">
            © {new Date().getFullYear()}, All Rights Reserved by VTJesus
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
