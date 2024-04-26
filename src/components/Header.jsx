import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [loginButton, setLogginButton] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  const handleLoginButton = () => {
    console.log("click");
    setLogginButton(loginButton === "Login" ? "Logout" : "Login");
  };

  return (
    <div className="flex items-center justify-between border-b-2">
      <div className="flex items-center">
        <img
          className="ml-8 h-24 w-36 cursor-pointer"
          src="https://img.freepik.com/free-vector/hand-drawn-design-world-food-day_23-2148648454.jpg"
          alt="logo"
        />
      </div>

      <div className="font-semibold">
        <ul className="m-4 flex items-center justify-between p-4 ">
          <li className="m-4 cursor-pointer">
            <Link to="/">🏠</Link>
          </li>
          <li className="m-4 cursor-pointer">
            <Link to="/about">
              <img
                className="h-10 w-10 rounded-full"
                src="https://i.redd.it/wr61jnqaa9k51.jpg"
                alt="about"
              />
            </Link>
          </li>
          <li className="m-4 cursor-pointer">
            <Link to="/contact">📞</Link>
          </li>
          <li className="m-4 cursor-pointer">
            <Link to="/grocery">GROCERY</Link>
          </li>
          <li className="m-4 cursor-pointer">
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
          <div className="flex items-center">
            <div className="user-avatar">
              <img
                className="ml-9 h-12 w-12 rounded-full border-b-2"
                src={"https://github.com/Bppatkar.png"}
                alt=""
              />
              <div className="default-user ml-7 w-full text-[9px]">
                {loggedInUser}
              </div>
              <span className="ml-12">{onlineStatus ? "🟢" : "🔴"}</span>
            </div>
            <button
              className=" m-2 ml-5 rounded-lg bg-orange-300 p-2 text-white"
              onClick={handleLoginButton}
            >
              {loginButton}
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
