import {useState,useMemo,useEffect,createContext,useContext} from "react";
import { me,logout } from "../services/authApi";
import { useNavigate } from "react-router-dom";
export const AuthContext=createContext();
export const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const navigate=useNavigate();
    const [getBlogs,setGetBlogs]=useState([]);
      const [loginOpen, setLoginOpen] = useState(false);
      const [registerOpen, setRegisterOpen] = useState(false);

      const logoutUser=async()=>{
        await logout();
      }
    useEffect(()=>{
        const fetchUser=async()=>{
            try{
                const data=await me();
                setUser(data?.data?.[0]);
                console.log("user data:",data.data);
            }
            catch(err){
                console.log("error in setuser",err);
            }
        }
        fetchUser();
        
    },[])
    const value={user,setUser,registerOpen,setRegisterOpen,loginOpen,setLoginOpen,navigate,logoutUser};
  return (
   <AuthContext.Provider value={value}>
    {children}
   </AuthContext.Provider>
  )
}

export const useAuthContext=()=>{
    return useContext(AuthContext)
}
