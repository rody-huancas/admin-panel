import { Link } from "react-router-dom";
import {
  RiHome2Line,
  RiLuggageCartFill,
  RiNumbersFill,
  RiStackFill,
  RiTruckLine,
} from "react-icons/ri";
// dropdown
import { MenuDropdown } from "./menu/MenuDropdown";
import { MenuItem } from "./menu/MenuItem";

export const Sidebar = () => {
  return (
    <div className="w-[330px] h-screen fixed top-0 left-0 px-6 py-5 bg-primary-100 flex flex-col gap-4 z-50">
      <Link to="/" className="flex justify-center items-center gap-4 mb-5">
        <img
          src="https://dashcode-react.codeshaper.net/assets/favicon.cbd04736.svg"
          alt="logo"
          className="h-8"
        />
        <span className="uppercase font-bold text-3xl">LOGO</span>
      </Link>

      <nav className="flex flex-col gap-1 text-primary-300 font-medium overflow-hidden">
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
  );
};
