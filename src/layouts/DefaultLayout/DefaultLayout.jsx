import { Outlet } from "react-router-dom";
import "./DefaultLayout.scss";
import Footer from "./Footer";
import Header from "./Header";

export default function DefaultLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
