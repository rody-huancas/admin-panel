import { RiSearch2Line } from "react-icons/ri";
import { ProfileItem } from "./header/ProfileItem";
import { NotificationItem } from "./header/NotificationItem";
import { ToggleDark } from "./header/ToggleDark";

export const Header = () => {
  return (
    <header className="w-full h-20 fixed bg-primary-100 lg:pl-96 dark:bg-secondary-200 dark:text-primary-200 transition-all duration-300">
      <div className="w-full h-full flex items-center justify-between px-8 py-2 lg:border-l-2 lg:border-primary-200 lg:dark:border-gray-700">
        <button className="flex items-center xl:text-sm text-lg  text-gray-700 px-1 space-x-3 rtl:space-x-reverse dark:text-primary-200">
          <RiSearch2Line />
          <span className="font-medium">
            Buscar...{" "}
          </span>
        </button>

        <div className="flex items-center gap-5">
          {/* Botón modo dark */}
          <ToggleDark />

          {/* notificaciones */}
          <NotificationItem />

          {/* perfil */}
          <ProfileItem />
        </div>
      </div>
    </header>
  );
};
