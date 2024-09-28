import serviceIcon1 from "../../assets/images/service-icon1.webp";
import serviceIcon2 from "../../assets/images/service-icon2.png";
import serviceIcon3 from "../../assets/images/service-icon3.png";
import serviceIcon4 from "../../assets/images/service-icon4.png";

const Service = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-20">
      <div className="flex gap-4 bg-[#f4f4f4] p-8 rounded">
        <img src={serviceIcon1} alt="" />
        <div>
          <h2 className="font-bold">Free Shipping</h2>
          <p className="text-sm text-gray-500">Free shipping all orders</p>
        </div>
      </div>
      <div className="flex gap-4 bg-[#f4f4f4] p-8 rounded">
        <img src={serviceIcon2} alt="" />
        <div>
          <h2 className="font-bold">Support 24/7</h2>
          <p className="text-sm text-gray-500">Support 24 hours a day</p>
        </div>
      </div>
      <div className="flex gap-4 bg-[#f4f4f4] p-8 rounded">
        <img src={serviceIcon3} alt="" />
        <div>
          <h2 className="font-bold">Money Return</h2>
          <p className="text-sm text-gray-500">30 days for free return</p>
        </div>
      </div>
      <div className="flex gap-4 bg-[#f4f4f4] p-8 rounded">
        <img src={serviceIcon4} alt="" />
        <div>
          <h2 className="font-bold">Order Discount</h2>
          <p className="text-sm text-gray-500">On every order over $15</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
