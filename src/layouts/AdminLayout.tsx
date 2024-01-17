import { Outlet } from "react-router-dom";
import { Footer, Header, Sidebar } from "components";

export const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 h-[150vh] bg-primary-200 text-gray-900 dark:bg-secondary-100 dark:text-primary-200  transition-all duration-300">
        <Header />

        <main className="lg:pl-96 mt-24">
          {/* Inyectar contenido dinámicamente */}
          <div className="px-10 py-5">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};
