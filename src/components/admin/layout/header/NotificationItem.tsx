import { Link } from "react-router-dom";
import { RiNotification3Line, RiThumbUpLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
// styles react menu
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

export const NotificationItem = () => {
  return (
    <>
      <Menu
        menuButton={
          <MenuButton className="relative hover:bg-primary-200 dark:hover:bg-secondary-100 p-2 rounded-lg transition-colors duration-300">
            <RiNotification3Line />
            <span className="absolute -top-1 -right-0 bg-red-500 py-0.5 px-[5px] text-white rounded-full text-xs font-bold">
              2
            </span>
          </MenuButton>
        }
        transition
        align={"center"}
        gap={15}
        menuClassName="bg-secondary-100 p-4"
      >
        <h3 className="text-gray-300 text-center font-medium">
          Notificaciones (2)
        </h3>
        <hr className="my-6 border-gray-500" />
        <MenuItem className="p-0 hover:bg-transparent">
          <Link
            to="/"
            className="text-gray-300 flex items-center gap-4 py-2 px-4 hover:bg-secondary-200/50 transition-colors rounded-lg flex-1"
          >
            <RiThumbUpLine className="p-2 box-content rounded-full bg-blue-200 text-blue-700" />
            <div className="text-sm flex flex-col">
              <div className="flex items-center justify-between gap-4">
                <span>Nueva venta</span>{" "}
                <span className="text-xs">10/01/2024</span>
              </div>
              <p className="text-gray-300 text-xs">
                Juan Perez ha generado una venta
              </p>
            </div>
          </Link>
        </MenuItem>
        <hr className="my-6 border-gray-500" />
        <MenuItem className="p-0 hover:bg-transparent flex justify-center cursor-default">
          <Link
            to="/"
            className="text-gray-400 text-sm hover:text-white transition-colors duration-300"
          >
            Leer todas las notificaciones.
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};
