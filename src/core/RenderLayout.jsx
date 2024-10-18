import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "../routes/publicRoutes";

export default function RenderLayout() {
  const PublicLayout = publicRoutes.layout;
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        {publicRoutes.routes.map(({ path, element }, index) => {
          const Component = element;
          return <Route key={index} path={path} element={<Component />} />;
        })}
      </Route>
    </Routes>
  );
}
