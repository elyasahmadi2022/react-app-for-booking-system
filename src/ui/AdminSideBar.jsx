export default function AdminSideBar({children, className}) {
  return (<ul className={`${className}`}>{children}</ul>);
}