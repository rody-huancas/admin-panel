import React, { useState } from "react";
// icons
import { RiArrowDropRightLine } from "react-icons/ri";
// interfaces
import { MenuProps } from "interfaces";

export const MenuDropdown: React.FC<MenuProps> = ({ title, children, Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        className="flex justify-between items-center gap-4 cursor-pointer hover:bg-primary-300/10 hover:text-gray-900 transition-colors duration-500 py-2 px-4 rounded-xl outline-none"
        onClick={handleToggle}
      >
        <span className="flex items-center gap-4">
          <Icon /> {title}
        </span>{" "}
        <RiArrowDropRightLine className={`w-5 h-5 rounded-full bg-primary-300/10 text-primary-300 text-xl ${isOpen && "rotate-90 transition-all"}`} />
      </button>
      {isOpen && (
        <div className="ml-10 flex flex-col gap-3">
          {React.Children.map(children, (child, index) => (
            <div key={index} className="flex items-center gap-4 font-normal">
              <span className=" bg-slate-900 dark:bg-slate-300 ring-4 ring-opacity-[15%] ring-black-500 dark:ring-slate-300 dark:ring-opacity-20 h-2 w-2 rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span> {child}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

