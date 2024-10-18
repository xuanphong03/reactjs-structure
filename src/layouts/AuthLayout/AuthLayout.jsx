import { Outlet } from "react-router-dom";
import "./AuthLayout.scss";

export default function AuthLayout() {
  return (
    <div>
      <h1>AuthLayout</h1>
      <Outlet />
    </div>
  );
}
