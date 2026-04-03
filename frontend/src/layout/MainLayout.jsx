import {Outlet} from "react-router-dom"
import Navbar from "../components/Navbar"
import { useAuthContext } from "../context/AuthContext";
import { HomeIcon } from "lucide-react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
const MainLayout = () => {
  const { user, registerOpen, loginOpen, setLoginOpen, setRegisterOpen } =
    useAuthContext();
 
  return (
    <div>
      <Navbar className=" bg-primary-dull min-h-screen" />
      {user && <Outlet  />}

      <div className="flex justify-center items-center my-16">
        {loginOpen ? (
          <div>
            <Login />
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

export default MainLayout