import { Link } from "react-router-dom";
import { RiArrowDownSLine, RiFolderLockLine, RiLogoutCircleLine, RiSettings3Line } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
// styles react menu
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

export const ProfileItem = () => {
    return (
        <>
            <Menu
                menuButton={
                    <MenuButton className="flex items-center gap-2 font-medium rounded-xl outline-none">
                        <span className="uppercase p-2 rounded-full bg-secondary-100 text-white">RH</span>
                        <span>Rody Huancas</span>
                        <RiArrowDownSLine />
                    </MenuButton>
                }
                align={"end"}
                gap={15}
                transition
                menuClassName="bg-secondary-100 p-4"
            >
                <MenuItem className="p-0 hover:bg-transparent">
                    <Link
                        to="/"
                        className="rounded-lg transition-colors text-gray-300 hover:bg-primary-300/10 flex items-center justify-center gap-x-4 py-2 px-4 flex-1"
                    >
                        Mi Perfil
                    </Link>
                </MenuItem>

                <hr className="my-4 border-gray-500" />

                <MenuItem className="p-0 hover:bg-transparent">
                    <Link
                        to="/"
                        className="rounded-lg transition-colors text-gray-300 hover:bg-primary-300/10 flex items-center gap-x-4 py-2 px-4 flex-1"
                    >
                        <RiSettings3Line /> Configuración
                    </Link>
                </MenuItem>

                <MenuItem className="p-0 hover:bg-transparent">
                    <Link
                        to="/"
                        className="rounded-lg transition-colors text-gray-300 hover:bg-primary-300/10 flex items-center gap-x-4 py-2 px-4 flex-1"
                    >
                        <RiFolderLockLine /> Código de autorización
                    </Link>
                </MenuItem>

                <MenuItem className="p-0 hover:bg-transparent">
                    <Link
                        to="/"
                        className="rounded-lg transition-colors text-gray-300 hover:bg-primary-300/10 flex items-center gap-x-4 py-2 px-4 flex-1"
                    >
                        <RiLogoutCircleLine /> Cerrar Sesión
                    </Link>
                </MenuItem>
            </Menu>
        </>
    )
}
