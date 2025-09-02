function MenuBarButton({ children, icon }) {
  return (
    <button className="flex items-center gap-2 py-2 px-3 w-full bg-white shadow-md  cursor-pointer hover:bg-orange-300 hover:text-white transition-all duration-200">
      <span>{icon}</span>
      <span>{children}</span>
    </button>
  );
}

export default MenuBarButton;
