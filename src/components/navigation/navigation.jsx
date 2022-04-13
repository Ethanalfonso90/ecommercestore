import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../util/firebase/firebase.js";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <div className="ui secondary menu">
        <Link className="item" to="/">
          <CrwnLogo />
        </Link>
        <div className="right menu">
          <Link className="item ui button" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="item ui button" onClick={signOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link className="item ui button" to="/signin">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
