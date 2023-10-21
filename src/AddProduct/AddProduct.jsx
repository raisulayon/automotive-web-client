import Swal from 'sweetalert2'

const AddProduct = () => {

    const handleAddCar=event=>{
        event.preventDefault();
        const form=event.target;
        const photo=form.photo.value;
        const name=form.name.value;
        const brand_name=form.brand_name.value;
        const type=form.type.value;
        const price=form.price.value;
        const description=form.description.value;
        const ratings=form.ratings.value;
      
        const newCar={photo, name, brand_name, type, price, description, ratings};
        console.log(newCar);

        // fetch('http://localhost:5000/cars', {
        //     method:"POST",
        //     headers:{
        //         'content-type':'application.json'
        //     },
        //     body:JSON.stringify(newCar)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data);
        // })

        fetch('http://localhost:5000/coffee', {
            method:"POST",
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
          })
          .then(res=>res.json())
          .then(data=>.{
            console.log(data);
            if(data.insertedId
              ){
              Swal.fire({
                title: 'Success!',
                text: 'Item Added',
                icon: 'success',
                confirmButtonText: 'Close'
              })
            }
            form.reset();
          })
        }
    }

  return (
    <div className="bg-[#f4f3f0] p-24">
      <h2 className="text-3xl font-rancho font-extrabold">Add a Car</h2>
      <form onSubmit={handleAddCar}>
        {/* form row 1*/}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Enter Image URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Enter Model Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row 2 */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brand_name"
                placeholder="Enter Brand Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="type"
                placeholder="Enter Car Type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row 3 */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Enter Car Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Enter Car Description details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row 4 */}
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Ratings</span>
          </label>
          <label className="input-group">
              <input
                type="text"
                name="ratings"
                placeholder="Enter Value 1 to 5"
                className="input input-bordered w-full"
              />
            </label>
          <label className="label">
          </label>
        </div>

        <input
          type="submit"
          value="Add Car"
          className="btn btn-block bg-primary text-white font-fontInter border-2 border-bg-[#331A15]"
        />
      </form>
    </div>
  );
};

export default AddProduct;
