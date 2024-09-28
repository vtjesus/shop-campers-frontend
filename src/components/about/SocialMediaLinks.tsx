import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <div className="bg-purple-300 p-10 ">
      <h2 className="text-xl font-semibold mb-4 text-center">Follow Us</h2>
      <div className="flex space-x-6 text-2xl justify-center items-center">
        <a
          href="https://www.facebook.com/yourshop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-blue-600 hover:text-blue-800" />
        </a>
        <a
          href="https://www.twitter.com/yourshop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="text-blue-400 hover:text-blue-600" />
        </a>
        <a
          href="https://www.instagram.com/yourshop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-pink-600 hover:text-pink-800" />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
