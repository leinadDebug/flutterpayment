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
      <main className="min-h-screen h-full flex items-center md:pt-0 md:pb-0 pt-20 pb-10">
        <div className="max-w-5xl mx-auto xl:px-0 px-5 ">
          <div className="grid md:grid-cols-3 grid-cols-1 lg:gap-10 gap-5">
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
