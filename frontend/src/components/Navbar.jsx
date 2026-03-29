import { useState } from "react"
import {Menu,X} from "lucide-react"
import logo from "../assets/logo.svg" 
import search_icon from "../assets/search_icon.svg";
import nav_cart_icon from "../assets/nav_cart_icon.svg";
import profile_icon from "../assets/profile_icon.png"
import { NavLink } from "react-router-dom"
import { useAppContext } from "../context/AppContext";
const Navbar = () => {
    const {user,setUser,navigate}=useAppContext();
    const [menuOpen,setMenuOpen]=useState(true);
    const [hamOpen,setHamOpen]=useState(true);
    const [XOpen,setXOpen]=useState(false);
    setUser(true);
  return (
    <div className="fixed h-16 py-4 border border-gray-200 top-0  flex justify-between  px-8 w-full items-center bg-white z-50  ">
      <div>
        <NavLink to="/">
          {" "}
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className=" hidden md:flex items-center space-x-6 relative">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">All Product</NavLink>
        <NavLink to="/">Contact</NavLink>
        <div className="flex items-center border rounded-2xl border-gray-400 focus-within:border-primary ">
          {" "}
          <input
            type="text"
            placeholder="Search products"
            className="outline-none px-4 py-1"
          />
          <img src={search_icon} alt="search icon" className="w-4 h-4 mr-2" />
        </div>
        <div className="relative" onClick={() => navigate("/cart")}>
          <img src={nav_cart_icon} alt="nav cart" />
          <div className="absolute -top-2  -right-2 w-4 h-4 self-center flex items-center justify-center  text-xs p-0.5 text-white bg-primary rounded-full  ">
            3
          </div>
        </div>
        {user ? (
          <div className="group relative mx-4">
            <img src={profile_icon} className="w-8 h-8" alt="profile_icon" />
            <ul className="hidden group-hover:block absolute border  w-30 top-8 bg-white border-gray-200 z-40 -left-16 px-2 text-sm rounded-md ">
              <li
                className="my-1 hover:bg-primary/10 px-2 py-1 hover:rounded-md cursor-pointer"
                onClick={() => navigate("/my-orders")}
              >
                My Orders
              </li>
              <li
                className="my-1 cursor-pointer hover:bg-primary/10 px-2 py-1 hover:rounded-md"
                onClick={() => setUser(false)}
              >
                Logout
              </li>
            </ul>
          </div>
        ) : (
          <button className="px-6 bg-primary hover:bg-primary-dull rounded-3xl text-white py-2 w-22 font-medium flex justify-center items-center">
            {" "}
            Login
          </button>
        )}
      </div>
      <div className="md:hidden ">
        {menuOpen ? (
          <X onClick={() => setMenuOpen(false)} className="cursor-pointer" />
        ) : (
          <Menu onClick={() => setMenuOpen(true)} className="cursor-pointer" />
        )}

        {menuOpen && (
          <div className="flex flex-col space-y-2 border absolute top-15 left-0 right-0 w-full pl-8 py-6 border-gray-200  bg-white">
            <NavLink
              to="/"
              className=" hover:bg-primary/10 py-1 px-4 rounded-lg"
            >
              Home
            </NavLink>
            <NavLink
              className="hover:bg-primary/10 py-1 px-4 rounded-lg"
              to="/products"
            >
              All Product
            </NavLink>
            <NavLink
              className="hover:bg-primary/10 py-1 px-4 rounded-lg"
              to="/"
            >
              Contact
            </NavLink>
            <button className="px-6 bg-primary hover:bg-primary-dull rounded-3xl text-white py-2 w-22 font-medium">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar