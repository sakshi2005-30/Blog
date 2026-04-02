import {use, useState} from "react"
import {User,Mail,Lock} from "lucide-react";
import { useAuthContext } from "../context/AuthContext";
import  {registerUser}  from "../services/authApi";
const Register = () => {
  const {setRegisterOpen,setLoginOpen,setUser}=useAuthContext();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const handleRegister=async(e)=>{
    e.preventDefault();
    try{
      const result=await registerUser({name,email,password});
      console.log("res:",result);
      setUser(result?.data?.[0]);
      setName("");
      setEmail("");
      setPassword("");
      
      setRegisterOpen(false)

    }
    catch(error){
      console.log("error in register",error);
    }
  }
  return (
    <div className="w-full my-20 ">
      <div className="w-sm mx-auto  bg-white rounded-xl py-8 shadow-md px-12 flex flex-col space-y-4">
        <div className="flex flex-col space-y-2 justify-center items-center">
          <p
            className="text-xl font-bold tracking-wider"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Folio.
          </p>
          <p className="text-sm text-gray-500">
            Create your account and start writing
          </p>
        </div>
        <form className="flex flex-col space-y-4" onSubmit={handleRegister}>
          <div className="text-sm  flex flex-col space-y-2">
            <label htmlFor="fullname" className="font-medium">
              Full name
            </label>
            <div className="w-full ring rounded-lg px-4 py-2 flex gap-2 items-center ring-primary focus-within:ring-2 focus-within:shadow-md">
              <User className="w-4 h-4 text-primary" />
              <input
                type="text"
                name="name"
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
                className="placeholder:text-sm placeholder:text-primary outline-none w-full"
              />
            </div>
          </div>
          <div className="text-sm  flex flex-col space-y-2">
            <label htmlFor="fullname" className="font-medium">
              Email
            </label>
            <div className="w-full ring rounded-lg px-4 py-2 flex gap-2 items-center ring-primary focus-within:ring-2 focus-within:shadow-md">
              <Mail className="w-4 h-4 text-primary" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="placeholder:text-sm placeholder:text-primary outline-none w-full"
              />
            </div>
          </div>
          <div className="text-sm  flex flex-col space-y-2">
            <label className="font-medium" htmlFor="fullname">
              Password
            </label>
            <div className="w-full ring rounded-lg px-4 py-2 flex gap-2 items-center ring-primary focus-within:ring-2 focus-within:shadow-md">
              <Lock className="w-4 h-4 text-primary" />
              <input
                type="password"
                name="password"
                placeholder="•••••"
                onChange={(e) => setPassword(e.target.value)}
                className="placeholder:text-sm placeholder:text-primary  outline-none w-full"
              />
            </div>
          </div>
          <button className="w-full bg-primary text-white font-medium text-sm py-2 px-4 rounded-lg hover:bg-primary-extra cursor-pointer">
            Create account
          </button>
        </form>
        <div className="text-sm text-gray-500  text-center">
          Already have an account? <span className="text-primary cursor-pointer  font-medium" onClick={()=>{
            setRegisterOpen(false);
            setLoginOpen(true)
          }}>Sign in</span>
        </div>
      </div>
    </div>
  );
}

export default Register