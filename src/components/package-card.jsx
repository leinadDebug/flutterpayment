import PropTypes from "prop-types";
import Button from "./button";

const PaymentCard = ({ packageHeading, packagePlan, packagePrice }) => {
  return (
    <>
      <div className="px-8 pt-14 pb-5 rounded-md ring-2 ring-gray-900 bg-gray-50 bg-opacity-50">
        <h1 className="text-3xl font-primary text-gray-900 font-semibold">
          ${packagePrice}
        </h1>
        <h2 className="text-xl font-primary text-gray-900 font-semibold">
          {packageHeading}
        </h2>

        <p className="mt-14 text-gray-400 text-sm font-primary font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="mt-5">
          {packagePlan === "basic" ? (
            <Button buttonOutline buttonText="Free plan" buttonWidth="w-full" />
          ) : (
            <Button buttonText="Subscribe" buttonWidth="w-full" />
          )}
        </div>
      </div>
    </>
  );
};

PaymentCard.propTypes = {
  packageHeading: PropTypes.string.isRequired,
  packagePlan: PropTypes.string.isRequired,
  packagePrice: PropTypes.number.isRequired,
};

PaymentCard.defaultProps = {
  packageHeading: "Heading",
  packagePlan: "basic",
  packagePrice: 0.0,
};

export default PaymentCard;
