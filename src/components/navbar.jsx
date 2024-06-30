import { Link } from "react-router-dom";
import Button from "./button";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white fixed top-0 left-0 right-0">
        <div className="max-w-7xl mx-auto flex items-center py-2">
          {/* logo */}
          <Link to={"/"} className="outline-none no-underline mr-auto">
            <h3 className="text-3xl font-bold text-gray-900 font-primary">
              Slash.
            </h3>
          </Link>

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
