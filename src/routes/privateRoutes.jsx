import { Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Profile from "../pages/Auth/Profile";
import AuthMiddleware from "../middlewares/AuthMiddleware";

export const privateRoutes = (
  <>
    <Route element={<DefaultLayout />}>
      <Route element={<AuthMiddleware />}>
        <Route path="/tai-khoan" element={<Profile />} />
      </Route>
    </Route>
  </>
);
