const Category = ({ brand }) => {
  const { image, brand_name } = brand;
  return (
    <div>
      <div className="card card-compact w-full h-96 bg-base-100 shadow-xl mx-auto relative">
        <figure>
          <img
            className="w-72 mx-auto mt-10 p-4"
            src={image}
            alt="{brand_name}"
          />
        </figure>
        <div className="card-body items-center absolute w-full m-auto bottom-0 ">
          <h2 className="card-title text-center uppercase font-extrabold">
          {brand_name}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Category;
