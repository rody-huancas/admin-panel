import { Outlet } from "react-router-dom";
import { Footer, Header, Sidebar } from "components";

export const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 pl-[330px] h-[150vh] bg-primary-200">
        <Header />

        <main className="p-10 mt-24">
          {/* Inyectar contenido dinámicamente */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
