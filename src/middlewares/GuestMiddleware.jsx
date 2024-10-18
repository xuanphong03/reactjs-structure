import { Navigate, Outlet } from "react-router-dom";

export default function GuestMiddleware() {
  const isLogin = true;
  return isLogin ? <Outlet /> : <Navigate to="/dang-nhap" />;
}
