const OurTeam = () => {
  return (
    <div>
      <div className="text-center space-y-2 py-10">
        <h1 className="text-4xl font-bold">Our Team</h1>
        <p className="text-gray-500 lg:w-[30%] mx-auto px-10 lg:px-0">
          The Campic team is a group of passionate camping enthusiasts,
          committed to providing the best gear and support to make your outdoor
          adventures unforgettable.
        </p>
      </div>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 xl:px-0">
        {/* owner  */}
        <div data-aos="zoom-in" className="card  bg-base-100 ">
          <figure>
            <img
              src="https://campic-store-demo.myshopify.com/cdn/shop/files/ourteam-1-2.jpg?v=1691030524"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Nick Mcallister</h2>
            <p>Owner</p>
          </div>
        </div>
        {/* co-founder  */}
        <div data-aos="zoom-in" className="card  bg-base-100 ">
          <figure>
            <img
              src="https://campic-store-demo.myshopify.com/cdn/shop/files/ourteam-1-3.jpg?v=1691030524"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Benj Spitch</h2>
            <p>Co-Founder</p>
          </div>
        </div>
        {/* CUSTOMER CARE */}
        <div data-aos="zoom-in" className="card  bg-base-100 ">
          <figure>
            <img
              src="https://campic-store-demo.myshopify.com/cdn/shop/files/ourteam-1-1.jpg?v=1691030524"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Ralph Johnson</h2>
            <p>Customer-Care</p>
          </div>
        </div>
        {/* Specialist */}
        <div data-aos="zoom-in" className="card  bg-base-100 ">
          <figure>
            <img
              src="https://campic-store-demo.myshopify.com/cdn/shop/files/ourteam-1-4.jpg?v=1691030524"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Tom Zafron</h2>
            <p>Specialist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
