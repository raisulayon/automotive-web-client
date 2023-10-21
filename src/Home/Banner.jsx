const Banner = () => {

  return (
    <div className="relative w-full h-[700px] mb-20 ">
        <div
        className="min-h-screen 
        bg-blend-overlay bg-black bg-opacity-40 
        absolute left-0 right-0"
        style={{
        backgroundImage:
        "url(https://i.postimg.cc/85bmqmJd/car.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}>
      <div className="max-w-7xl mx-auto">
        <div className="md:max-w-5xl mx-auto mt-52 text-white fontI">
          <h3 className="text-center text-2xl md:text-5xl md:text-left font-semibold">NEED A RIDE</h3>
          <h1 className="text-center text-5xl md:text-7xl md:text-left font-extrabold">FIND YOUR
          <br/>
          BEST DEALS</h1>
          <p className="mb-5 text-xl text-center text-red-600 md:text-left">
            Get 25% Discount On Limited Items
          </p>
          <button className="btn bg-yellow-300 justify-center md:text-left">Book Now</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
