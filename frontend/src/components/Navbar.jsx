import {Search} from "lucide-react"
import { useState } from "react";
import Login from "../pages/Login"
import Register from "../pages/Register"
import { useAuthContext } from "../context/AuthContext";
const Navbar = () => {
    const {setRegisterOpen,setLoginOpen}=useAuthContext();
 
  return (
    <div className="fixed top-0 left-0 w-full h-16 z-50 bg-primary-dull    border border-primary/30">
      <div className="max-w-[95%] mx-auto  h-16  flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="">
            <p
              className="text-primary font-bold tracking-wide flex text-lg  "
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Folio.
            </p>
          </div>
          <div
            animate={{}}
            className="w-60  rounded-2xl bg-primary/10 flex justify-center items-center px-2 py-2"
          >
            <Search className="w-4 h-4" />{" "}
            <input
              type="text"
              className=" outline-none placeholder:text-sm px-2"
              placeholder="Search stories..."
            />
          </div>
        </div>

        <div className="flex items-center gap-1 ">
          <button
            className="text-sm text-primary px-4 py-2 cursor-pointer rounded-xl hover:bg-black/10 "
            onClick={() => setLoginOpen(true)}
          >
            Sign In
          </button>
          <button
            className="text-white bg-primary rounded-xl py-2 px-4 text-sm font-medium hover:bg-primary-extra cursor-pointer hover:shadow-md"
            onClick={() => setRegisterOpen(true)}
          >
            Get started
          </button>
        </div>
      </div>
     
    </div>
  );
}

export default Navbar