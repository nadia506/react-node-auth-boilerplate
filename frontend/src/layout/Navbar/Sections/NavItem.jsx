import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../../store/thunkFunctions";

const routes = [
  { to: "/login", name: "Log in", auth: false },
  { to: "/register", name: "Sign up", auth: false },

  { to: "", name: "Sign out", auth: true },
];

const NavItem = ({ mobile }) => {
  const isAuth = useSelector((state) => state.user?.isAuth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser()).then(() => {
      navigate("/login");
    });
  };

  return (
    <ul
      className={`text-md justify-center w-full flex gap-4 ${
        mobile && "flex-col bg-gray-900 h-full"
      } items-center`}
    >
      {routes.map(({ to, name, auth, icon }) => {
        if (isAuth !== auth) return null;
        if (name === "Sign out") {
          return (
            <li
              key={name}
              className="py-2 text-center border-b-4 cursor-pointer"
            >
              <Link onClick={handleLogout}>{name}</Link>
            </li>
          );
        } else {
          return (
            <li
              key={name}
              className="py-2 text-center border-b-4 cursor-pointer"
            >
              <Link to={to}>{name}</Link>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default NavItem;
