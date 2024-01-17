import { RiSearch2Line, RiSunFill } from "react-icons/ri";
import { ProfileItem } from "./header/ProfileItem";
import { NotificationItem } from "./header/NotificationItem";

export const Header = () => {
  return (
    <header className="w-full h-20 fixed bg-primary-100 pl-[330px]">
      <div className="w-full h-full flex items-center justify-between px-8 py-2 border-l-2 border-primary-200">
        <button className="flex items-center xl:text-sm text-lg  text-gray-700 px-1 space-x-3 rtl:space-x-reverse">
          <RiSearch2Line />
          <span className="xl:inline-block hidden uppercase font-medium">Buscar... </span>
        </button>

        <div className="flex items-center gap-5">
          <button>
            <RiSunFill />
          </button>

          {/* notificaciones */}
          <NotificationItem />

          {/* perfil */}
          <ProfileItem />
        </div>
      </div>
    </header>
  );
};
