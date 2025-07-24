import { useNavigate } from "react-router-dom";
import { FaUserTie } from "react-icons/fa6";

export default function User() {
  const navigate = useNavigate();
  return (
    <div className="w-10 xl:w-12 max-sm:hidden" onClick={() => navigate("/login")}>
      <FaUserTie
        className="cursor-pointer w-8 xl:w-10"
        size={30}
        color="#fff"
      />
    </div>
  );
}
