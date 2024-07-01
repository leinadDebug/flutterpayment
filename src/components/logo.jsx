import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link to={"/"} className="outline-none no-underline mr-auto">
        <h3 className="text-3xl font-bold text-gray-900 font-primary">
          Slash.
        </h3>
      </Link>
    </>
  );
};

export default Logo;
