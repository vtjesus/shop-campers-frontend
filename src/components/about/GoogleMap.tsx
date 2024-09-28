const GoogleMap = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Our Location</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.47302202276!2d88.59622117608872!3d24.364842978256164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefa895533161%3A0x75ad7d923bd2e1a4!2sRDA%20MARKET!5e0!3m2!1sen!2sbd!4v1726896978832!5m2!1sen!2sbd"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        title="Google Map Location"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
