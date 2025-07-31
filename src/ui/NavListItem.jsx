import { NavLink } from "react-router-dom";
export function NavListItem({ navitem, className }) {
  const { label, path } = navitem;
  return (
    <NavLink className={`navItem  ${className}`} to={path}>
      {label}
    </NavLink>
  );
}
