import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminLayout } from "layouts/AdminLayout";
import { Home } from "pages";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
