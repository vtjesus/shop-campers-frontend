import { Link } from "react-router-dom";

const VideoBlogs = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Trending Brands</h2>
        <p className="text-gray-600 mt-2">
          Explore the great outdoors in style with our curated selection of
          top-tier outdoor brands.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Video Card 1 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <video
            className="w-full h-full object-cover"
            src="https://adventureshop.mt/cdn/shop/videos/c/vp/77a142a919dd4d8cbed3c5ea7bd602e4/77a142a919dd4d8cbed3c5ea7bd602e4.HD-1080p-7.2Mbps-25302920.mp4?v=0%22"
            autoPlay
            muted
            loop
          ></video>
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50"></div>

          {/* Text Content */}
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-white text-2xl font-bold mb-2">Lowe Alpine</h3>
            <p className="text-white text-sm">Move Your World</p>
            <Link to={"/products"}>
              <button className="mt-4 bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-300 transition duration-300">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        {/* Video Card 2 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <video
            className="w-full h-full object-cover"
            src="https://adventureshop.mt/cdn/shop/videos/c/vp/c3219e7658544af9a74fcc64ce14dc4f/c3219e7658544af9a74fcc64ce14dc4f.HD-1080p-7.2Mbps-25306104.mp4?v=0"
            autoPlay
            muted
            loop
          ></video>
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50"></div>

          {/* Text Content */}
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-white text-2xl font-bold mb-2">
              Trekking Through Patagonia
            </h3>
            <p className="text-white text-sm">
              A trek through the rugged landscapes of Patagonia
            </p>
            <Link to={"/products"}>
              <button className="mt-4 bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-300 transition duration-300">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        {/* Video Card 3 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <video
            className="w-full h-full object-cover"
            src="https://adventureshop.mt/cdn/shop/videos/c/vp/08d75cc265eb4b1283598e68f8aa6bdd/08d75cc265eb4b1283598e68f8aa6bdd.HD-1080p-7.2Mbps-18566616.mp4?v=0%22"
            autoPlay
            muted
            loop
          ></video>
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50"></div>

          {/* Text Content */}
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-white text-2xl font-bold mb-2">
              Exploring the Alps
            </h3>
            <p className="text-white text-sm">
              Discover the hidden gems of the Swiss Alps
            </p>
            <Link to={"/products"}>
              <button className="mt-4 bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-300 transition duration-300">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBlogs;
