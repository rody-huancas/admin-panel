import { Link } from "react-router-dom"
import { MenuItemProps } from "interfaces"

export const MenuItem = ({route, title, Icon}: MenuItemProps) => {
  return (
    <Link to={route} className="flex items-center gap-4 hover:bg-primary-300/10 hover:text-gray-900 py-2 px-4 rounded-xl">
        <Icon/> {title}
    </Link>
  )
}
