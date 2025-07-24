import { Link } from "react-router-dom";
import logo from "../../public/logo.png";
import { TiThMenu } from "react-icons/ti";
export default function Logo() {
  return (
    <div>
      <Link to="/" className=" max-sm:hidden">
        <img src={logo} alt="logo" className="w-10 xl:w-12" />
      </Link>
      
    </div>
  );
}
