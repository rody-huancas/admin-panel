import { useState } from "react";
import { Link } from "react-router-dom";
import {
  RiHome2Line,
  RiLuggageCartFill,
  RiMenu3Fill,
  RiNumbersFill,
  RiStackFill,
  RiTruckLine,
  RiCloseLine,
} from "react-icons/ri";
// dropdown
import { MenuDropdown } from "./menu/MenuDropdown";
import { MenuItem } from "./menu/MenuItem";

export const Sidebar = () => {
  const [showMenu, setshowMenu] = useState(false);

  const toggleShowMenu = () => {
    setshowMenu(!showMenu);
  };

  return (
    <>
      <div className={`lg:w-330 h-screen lg:left-0 px-6 py-5 bg-primary-100 flex flex-col gap-4 z-50 dark:bg-secondary-200 dark:text-primary-200 transition-all duration-300 fixed top-0 ${showMenu ? "left-0" : "-left-full"}`}>
        <Link to="/" className="flex justify-center items-center gap-4 mb-5">
          <img
            src="https://dashcode-react.codeshaper.net/assets/favicon.cbd04736.svg"
            alt="logo"
            className="h-8"
          />
          <span className="uppercase font-bold text-3xl">LOGO</span>
        </Link>

        <nav className="flex flex-col gap-3 text-primary-300 dark:text-primary-200/80 font-medium overflow-hidden">
          <MenuItem Icon={RiHome2Line} title="Dashboard" route="/" />

          <MenuDropdown title="Inteligencia empresarial" Icon={RiNumbersFill}>
            <Link to="/" className="">
              Reportes Gerenciales
            </Link>
            <Link to="/" className="">
              Reportes Operativos
            </Link>
          </MenuDropdown>

          <MenuDropdown title="Inventario" Icon={RiStackFill}>
            <Link to="/" className="flex items-center gap-4">
              Catalogo de productos
            </Link>
            <Link to="/" className="flex items-center gap-4">
              Consulta de stock
            </Link>
            <Link to="/" className="flex items-center gap-4">
              Despacho
            </Link>
            <Link to="/" className="flex items-center gap-4">
              Analítica de despacho
            </Link>
            <Link to="/" className="flex items-center gap-4">
              Series de producto
            </Link>
            <Link to="/" className="flex items-center gap-4">
              Analítica de series
            </Link>
            <Link to="/" className="flex items-center gap-4">
              Ajustes de inventario
            </Link>
            <Link to="/" className="flex items-center gap-4">
              Redistribución de stock
            </Link>
          </MenuDropdown>

          <MenuDropdown title="Compras" Icon={RiTruckLine}>
            <Link to="/" className="">
              Requerimientos de compra
            </Link>
            <Link to="/" className="">
              Órdenes de compra
            </Link>
            <Link to="/" className="">
              Documentos de mercadería
            </Link>
            <Link to="/" className="">
              Documentos de gastos
            </Link>
            <Link to="/" className="">
              Proveedores
            </Link>
            <Link to="/" className="">
              Reportes
            </Link>
          </MenuDropdown>

          <MenuDropdown title="Ventas" Icon={RiLuggageCartFill}>
            <Link to="/" className="">
              Clientes
            </Link>
            <Link to="/" className="">
              Consultar productos
            </Link>
            <Link to="/" className="">
              Cotizaciones
            </Link>
            <Link to="/" className="">
              Pedidos de venta
            </Link>
            <Link to="/" className="">
              Comprobantes de venta
            </Link>
            <Link to="/" className="">
              Comprobantes de percepción
            </Link>
            <Link to="/" className="">
              Guías de remisión
            </Link>
            <Link to="/" className="">
              Notas de despacho
            </Link>
            <Link to="/" className="">
              Notas de crédito
            </Link>
            <Link to="/" className="">
              Notas de devolución
            </Link>
            <Link to="/" className="">
              Punto de venta - TPV
            </Link>
            <Link to="/" className="">
              Edición de precios
            </Link>
            <Link to="/" className="">
              Precios actualizados
            </Link>
          </MenuDropdown>
        </nav>
      </div>

      <button
        className="lg:hidden fixed bottom-5 right-5 p-4 bg-secondary-100 rounded-full text-primary-100 dark:bg-primary-200 dark:text-secondary-100 text-xl"
        onClick={toggleShowMenu}
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill /> }
      </button>
    </>
  );
};
