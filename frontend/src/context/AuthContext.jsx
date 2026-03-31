import {useState,useEffect,createContext,useContext} from "react";
import { me } from "../services/authApi";
export const AuthContext=createContext();
export const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [getBlogs,setGetBlogs]=useState([]);
    useEffect(()=>{
        const fetchUser=async()=>{
            try{
                const data=await me();
                setUser(data.data);
                console.log("user data:",data);
            }
            catch(err){
                console.log("error in setuser",err);
            }
        }
        fetchUser();
        
    },[user])
    const value={user,setUser};
  return (
   <AuthContext.Provider value={value}>
    {children}
   </AuthContext.Provider>
  )
}

export const useAuthContext=()=>{
    return useContext(AuthContext)
}
