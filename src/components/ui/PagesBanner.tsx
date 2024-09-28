import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const PagesBanner = ({ currentPage }: { currentPage: string }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      data-aos="zoom-in"
      className="bg-[url('https://campic-store-demo.myshopify.com/cdn/shop/files/bg_page.jpg?v=1691032098')] bg-cover bg-center h-96 flex justify-center items-center"
    >
      <span className="text-white text-2xl font-bold">
        Home &gt; {currentPage}
      </span>
    </div>
  );
};

export default PagesBanner;
