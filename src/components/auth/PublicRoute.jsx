import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
    const { name,email} = useSelector((state)=>state?.auth?.owner);
    console.log(name)
    return (name  && email  )? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;
