import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };
  return (
    <div className="navbar bg-base-100 bg-slate-300">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          Auth Master
        </Link>
        <div>
          {user && (
            <div>
              {user.displayName}{" "}
              <button onClick={() => handleLogOut()} className="btn btn-info">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>

          <li>
            <Link to={"/registration"}>Registration</Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
