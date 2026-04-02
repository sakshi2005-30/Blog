import {Search} from "lucide-react"
import { useState } from "react";

import { useAuthContext } from "../context/AuthContext";
const Navbar = () => {
  const [profileOpen,setProfileOpen]=useState(false);
  
    const {setRegisterOpen,setLoginOpen,user,navigate,logoutUser,setUser}=useAuthContext();
    console.log("nav user:",user);
    console.log("name:",user?.name)
 const username = user?.userExists?.name
   ?.split(" ")
   .map((word) => word[0])
   .join("")
   .toUpperCase();
  return (
    <div className="fixed top-0 left-0 w-full h-16 z-50 bg-primary-dull border border-primary/30">
      <div className="max-w-[95%] mx-auto  h-16  flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <p
              className="text-primary font-bold tracking-wide flex text-lg  "
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Folio.
            </p>
          </div>
          <div className="w-60  rounded-2xl bg-primary/10 flex justify-center items-center px-2 py-2">
            <Search className="w-4 h-4" />{" "}
            <input
              type="text"
              className=" outline-none placeholder:text-sm px-2"
              placeholder="Search stories..."
            />
          </div>
        </div>

        {user ? (
          <div className="flex gap-4 items-center ">
            <div
              className="text-sm font-medium  cursor-pointer text-gray-800 hover:text-gray-500"
              onClick={() => navigate("/create")}
            >
              +&nbsp;Write
            </div>
            <div
              className="text-sm font-medium  cursor-pointer text-gray-800 hover:text-gray-500"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </div>
            <div
              className="h-8 w-8 bg-primary text-white  flex justify-center items-center rounded-full cursor-pointer"
              onClick={() => setProfileOpen(true)}
            >
              <p className="font-medium"> {username}</p>

              {profileOpen && (
                <div className="absolute flex flex-col justify-center bg-white top-18 right-8 rounded-lg text-black  py-2 w-35">
                  <div
                    className="w-full px-4 py-2 text-sm hover:bg-primary/10 "
                    onClick={(e) => {
                      e.stopPropagation();
                      setProfileOpen(false);
                      navigate("/dashboard");
                    }}
                  >
                    Dashboard
                  </div>
                  <div
                    className="w-full px-4 py-2 text-sm hover:bg-primary/10 "
                    onClick={(e) => {
                      e.stopPropagation();
                      setProfileOpen(false);
                      navigate("/create");
                    }}
                  >
                    Write a story
                  </div>
                  <div
                    className="w-full px-4 py-2 text-sm hover:bg-primary/10 "
                    onClick={() => {
                      logoutUser();
                      setUser(null);
                    }}
                  >
                    Sign out
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}

export default Navbar