import PropTypes from "prop-types";

const Button = ({ buttonText, buttonWidth, buttonOutline }) => {
  return (
    <>
      {buttonOutline ? (
        <button
          className={`outline-none py-2 px-5 rounded-md ring-2 ring-gray-900 bg-transparent text-gray-900 font-primary duration-200 ease-in hover:bg-gray-900 hover:text-white text-base ${buttonWidth}`}
        >
          {buttonText}
        </button>
      ) : (
        <button
          className={`outline-none py-2 shadow-lg px-5 rounded-md ring-1 ring-gray-900 bg-gray-800 text-white font-primary duration-200 ease-in hover:bg-gray-900 text-base ${buttonWidth}`}
        >
          {buttonText}
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonWidth: PropTypes.string,
  buttonOutline: PropTypes.bool,
};

Button.defaultProps = {
  buttonText: "Button text",
};

export default Button;
