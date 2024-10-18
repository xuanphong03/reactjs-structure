import { Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Products from "../pages/Products/Products";
import ProductDetail from "../pages/Products/ProductDetail";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../pages/Auth/Login";
import GuestMiddleware from "../middlewares/GuestMiddleware";

export const publicRoutes = (
  <>
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<Home />} />
      <Route path="/gioi-thieu" element={<About />} />
      <Route path="/san-pham" element={<Home />}>
        <Route path="" element={<Products />} />
        <Route path=":id" element={<ProductDetail />} />
      </Route>
    </Route>
    <Route path="/" element={<AuthLayout />}>
      <Route element={<GuestMiddleware />}>
        <Route path="/dang-nhap" element={<Login />} />
      </Route>
    </Route>
  </>
);
