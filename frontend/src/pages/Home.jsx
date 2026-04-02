import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import Login from "./Login";
import Register from "./Register";
const Home = () => {
  const {registerOpen,loginOpen,setLoginOpen,setRegisterOpen}=useAuthContext();
 
  return (
    <div className="mt-16 ">
      <div className="flex justify-center items-center my-16">
        
        {loginOpen ? (
          <div>
            <Login  />
          </div>
        ) : (
          registerOpen && (
            <div>
              <Register
                setRegisterOpen={setRegisterOpen}
                setLoginOpen={setLoginOpen}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Home