import { Navigate,Route } from "react-router-dom";

const ProtectedRoute = ({element: Component}) => {
  const currentUser = JSON.parse(localStorage.getItem("publickey"));
  const isVerified = JSON.parse(localStorage.getItem('isVerified'))||false;

  // If no user  registered or logged in → redirect to home page
  if (!currentUser) {// checks is any publickey assigned
    return <Navigate to='/' replace/>
  }

  if(!isVerified){// checks  user verified or not if not navigate configuaration page
    return <Navigate to='/auth' replace/>
  }
  
  
  // two factor authentication
  // If all assigned to user like publickey and verified with publickey then it navigate to dashboard
  return Component
};

export default ProtectedRoute;