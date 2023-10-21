import { Link, NavLink } from "react-router-dom";
import AddProduct from './../AddProduct/AddProduct';
import Login from './../Login/Login';

const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#FF444A] text-lg font-medium underline"
              : "text-lg"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addproduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#FF444A] text-lg font-medium underline"
              : "text-lg"
          }
        >
          AddProduct
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#FF444A] text-lg font-medium underline"
              : "text-lg"
          }
        >
          Cart
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="relative z-50">
      <div className="fixed top-0 left-0 right-0 bg-base-100">
      <div className="navbar max-w-7xl mx-auto sticky top-0">
      <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
            {navLinks}
            </ul>
          </div>
          <Link to='/'>
          <h2 
          className="text-xl font-bold">
          <span className="text-red-600">Auto</span>Point
          </h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
        <Link to='/login'>
          <button className="btn">Login</button>
        </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default NavBar;
