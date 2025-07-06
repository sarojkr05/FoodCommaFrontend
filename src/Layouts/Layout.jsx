import { useDispatch, useSelector } from "react-redux";
import Footer from "../Components/Footer";
import Pizzalogo from "../assets/Images/pizza1.png";
import CartIcon from "../assets/Images/cart.svg";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Redux/Slices/AuthSlice";
import { getCartDetails } from "../Redux/Slices/CartSlice";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { cartsData } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  async function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
  }

  async function fetchCartDetails() {
    const res = await dispatch(getCartDetails());
    if (res?.payload?.isUnauthorized) {
      dispatch(logout());
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      fetchCartDetails();
    }
  }, []);

  return (
    <div>
      <nav className="flex items-center justify-between px-4 md:px-8 h-16 text-[#6B7280] font-mono shadow-md bg-white relative z-50">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}> 
          <img src={Pizzalogo} alt="Pizza logo" className="h-10 w-10" />
          <p className="text-lg font-bold text-black">Pizza App</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link to="/menu" className="hover:text-[#FF9110]">Menu</Link>
          <Link to="/services" className="hover:text-[#FF9110]">Services</Link>
          <Link to="/about" className="hover:text-[#FF9110]">About</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {isLoggedIn && (
            <Link to="/cart" className="relative">
              <img src={CartIcon} className="w-7 h-7" alt="Cart" />
              <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
                {cartsData?.items?.length || 0}
              </span>
            </Link>
          )}
          <div className="hover:text-[#FF9110]">
            {isLoggedIn ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <Link to="/auth/login">Login</Link>
            )}
          </div>

          {/* Hamburger Icon */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 shadow-md md:hidden">
            <Link to="/menu" className="hover:text-[#FF9110]">Menu</Link>
            <Link to="/services" className="hover:text-[#FF9110]">Services</Link>
            <Link to="/about" className="hover:text-[#FF9110]">About</Link>
          </div>
        )}
      </nav>

      {children}

      <Footer />
    </div>
  );
}

export default Layout;
