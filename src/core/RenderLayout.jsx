import { Routes } from "react-router-dom";
import { publicRoutes } from "../routes/publicRoutes";
import { privateRoutes } from "../routes/privateRoutes";

export default function RenderLayout() {
  return (
    <Routes>
      {publicRoutes}
      {privateRoutes}
    </Routes>
  );
}
