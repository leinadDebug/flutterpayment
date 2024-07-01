import { Link } from "react-router-dom";
import Button from "./button";
import Logo from "./logo";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white fixed top-0 left-0 right-0">
        <div className="max-w-7xl xl:px-0 md:px-5 px-3 mx-auto flex items-center py-3 md:border-0 border-b-2 border-b-gray-900">
          {/* logo */}
          <Logo />

          {/* sign up / login buttons */}
          <div className="flex gap-3 items-center">
            <Link to={"/register"} className="outline-none no-underline">
              <Button buttonText="Sign Up" />
            </Link>

            <Link to={"/login"} className="outline-none no-underline">
              <Button buttonOutline buttonText="Log In" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
