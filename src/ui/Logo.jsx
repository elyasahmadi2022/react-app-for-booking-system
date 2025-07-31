import { Link } from "react-router-dom";
import logo from "/logo.png";
import { TiThMenu } from "react-icons/ti";
export default function Logo({className}) {
  return (
    <div>
      <Link to="/" className={className}>
        <img src={logo} alt="logo" className="w-12 xl:w-14" />
      </Link>
      
    </div>
  );
}
