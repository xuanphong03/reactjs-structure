import { Navigate, Outlet } from "react-router-dom";

export default function AuthMiddleware() {
  const isLogin = true;
  return !isLogin ? <Outlet /> : <Navigate to="/" />;
}
