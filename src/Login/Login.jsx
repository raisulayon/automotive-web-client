import { Link } from "react-router-dom";
import SignUp from './../SignUp/SignUp';

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="flex-col lg:flex-row-reverse">

          <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
            <form className="card-body w-96">
            <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold">Login Here</h1>
          </div>
          {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
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
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-sm">New user? Please
              <Link to='/signup' className="text-blue-500 font-semibold underline-offset-2"> Sign Up here</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
