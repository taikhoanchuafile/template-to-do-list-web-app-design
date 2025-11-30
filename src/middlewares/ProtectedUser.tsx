import { Navigate, Outlet } from "react-router";
import { useStateStore } from "../stores/StateStore";

const ProtectedUser = () => {
  const isLogin = useStateStore((state) => state.isLogin);

  if (!isLogin) {
    console.log("protected:", isLogin);

    return <Navigate to="/signin" replace></Navigate>;
  }
  return <Outlet></Outlet>;
};

export default ProtectedUser;
