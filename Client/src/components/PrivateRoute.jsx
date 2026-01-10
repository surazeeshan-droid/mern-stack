import {userSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";

export default function PrivateRoute() {
    const {currentUser} = userSelector((state) => state.user);
  return currentUser ? <Outlet/> : <Navigate to="/signin"/>;
  
  
};
