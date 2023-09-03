import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("login");
  const handleBtn = () => {
    btn === "login" ? setBtn("logout") : setBtn("login");
  };
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-lg bg-pink-100 mb-2 px-2">
      <div className="logo">
        <div className="flex justify-between pt-1">
          <img className="w-20" src={LOGO_URL} alt="Logo" />
          <h1 className="pl-2 m-6">Order your favorite food from us</h1>
        </div>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/" className="text-blue-500 hover:underline">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about" className="text-blue-500 hover:underline">
              About us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact" className="text-blue-500 hover:underline">
              Contact us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery" className="text-blue-500 hover:underline">
              Instamart
            </Link>
          </li>
          <li className="px-4">
            <span className="text-blue-500 hover:underline cursor-pointer">
              Cart
            </span>
          </li>
          <li className="px-4">
            Online Status :{" "}
            <span className={onlineStatus ? "text-green-500" : "text-red-500"}>
              {onlineStatus ? "✅" : "❌"}
            </span>
          </li>
        </ul>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleBtn}
        >
          {btn}
        </button>
      </div>
    </div>
  );
};

export default Header;
