import Navbar from "../../components/navbar";
import PaymentCard from "../../components/package-card";

const Home = () => {
  const packagesData = [
    {
      packageTitle: "Free plan",
      packagePlan: "basic",
      price: 0.0,
    },

    {
      packageTitle: "Premium Plan",
      packagePlan: "premium",
      price: 30000,
    },

    {
      packageTitle: "Business Plan",
      packagePlan: "business",
      price: 70000,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen h-full flex items-center">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-10">
            {/* loop through packageData and display data in UI */}
            {packagesData.map((data, index) => {
              const { packagePlan, packageTitle, price } = data;

              return (
                <PaymentCard
                  key={index}
                  packageHeading={packageTitle}
                  packagePlan={packagePlan}
                  packagePrice={price.toLocaleString()}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
