import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingX from "../components/tools/loading/LoadingX";

const Private = ({children}) => {
   
    const {user, loading} = useContext(AuthContext);
      const location = useLocation();
      
     if(loading) {
               return <LoadingX></LoadingX>
     }

     if (user) {
        return children;
     }
    
     return <Navigate state={location.pathname} to="/login"></Navigate>
    
};

export default Private;