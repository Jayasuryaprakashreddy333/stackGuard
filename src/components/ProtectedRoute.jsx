import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const currentUser = JSON.parse(localStorage.getItem("publickey"));

  // If no user is logged in → redirect to login page
  if (!currentUser) {
    return <Navigate to="/home" replace />;
  }
  

  // If logged in → allow access to the protected page
  return children;
};

export default ProtectedRoute;