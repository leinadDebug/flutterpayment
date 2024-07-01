import { Link } from "react-router-dom";
import Logo from "../../components/logo";
import Button from "../../components/button";

const Login = () => {
  return (
    <>
      <main className="min-h-screen h-full flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="mx-auto w-fit">
            <Logo />
          </div>
          <h3 className="text-gray-500 text-sm font-primary text-center">
            Don&apos;t have an account?{" "}
            <Link
              to={"/register"}
              className="outline-none underline text-gray-900 font-primary"
            >
              Sign up
            </Link>
          </h3>

          {/* form field */}
          <form className="flex flex-col gap-y-5 mt-7">
            <input
              type="email"
              className="outline-none p-2 rounded-md ring-2 box-border ring-gray-900 bg-white text-sm text-gray-900 font-primary"
              placeholder="Email address"
            />

            <input
              type="password"
              className="outline-none p-2 rounded-md ring-2 box-border ring-gray-900 bg-white text-sm text-gray-900 font-primary"
              placeholder="Password"
            />

            <Button buttonText="Log in" buttonWidth={"w-full"} />
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;