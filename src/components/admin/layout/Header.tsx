import { RiSearch2Line, RiSunLine } from "react-icons/ri";

export const Header = () => {
  return (
    <header className="w-full h-24 border-l-2 border-primary-200 px-8 py-2 fixed flex items-center justify-between">
        <button className="flex items-center xl:text-sm text-lg  text-gray-700 px-1 space-x-3 rtl:space-x-reverse">
          <RiSearch2Line/>
          <span className="xl:inline-block hidden uppercase font-medium">Buscar... </span>
        </button>

        <div className="text-black">
          <RiSunLine/>
        </div>
    </header>
  );
};
