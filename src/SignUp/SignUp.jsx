import { Link } from "react-router-dom";



const SignUp = () => {
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="flex-col lg:flex-row-reverse">
  
            <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
              <form className="card-body w-96">
              <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold">Sign Up Here</h1>
            </div>
            {/* name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name:</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    className="input input-bordered"
                    required
                  />
                </div>
            {/* email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <button className="btn btn-primary text-white mt-4 text-xl normal-case">Sign Up</button>
                </div>
                <p className="text-sm">Already have account? Please
                <Link to='/login' 
                className="text-blue-500 font-semibold underline-offset-2"> Login
                </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;