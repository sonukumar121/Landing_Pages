const Price = () => {
  const plans = [
    {
      name: "START",
      price: "Free",
      features: [
        "Access to basic gym equipment",
        "1 group class per week",
        "Track your progress",
      ],
      popular: false,
    },
    {
      name: "PRO",
      price: "$38/mo",
      features: [
        "Unlimited gym access",
        "5 group classes per week",
        "Personalized workout plan",
        "Nutrition guidance",
      ],
      popular: true,
    },
    {
      name: "BUSINESS",
      price: "$56/mo",
      features: [
        "Unlimited gym access",
        "All fitness classes included",
        "1 personal trainer session per month",
        "Body composition analysis",
      ],
      popular: false,
    },
    {
      name: "SPECIAL",
      price: "$72/mo",
      features: [
        "Unlimited gym access",
        "All classes + premium sessions",
        "Weekly personal training",
        "Custom diet & nutrition plan",
        "Priority support",
      ],
      popular: false,
    },
  ];

  return (
    <section className="text-gray-100 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Choose Your Fitness Plan</h1>
          <p className="text-gray-400">
            Start your journey to a stronger, healthier you. Pick a plan that fits your lifestyle and goals!
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {plans.map((plan, i) => (
            <div key={i} className="p-4 md:w-1/2 lg:w-1/4 w-full">
              <div
                className={`h-full p-6 rounded-2xl flex flex-col relative overflow-hidden transition-transform transform hover:scale-105 ${
                  plan.popular
                    ? "bg-indigo-600 border-2 border-orange-400 shadow-xl"
                    : "bg-gray-800 border border-gray-700"
                }`}
              >
                {plan.popular && (
                  <span className="bg-orange-400 text-gray-900 px-3 py-1 text-xs font-bold absolute right-0 top-0 rounded-bl">
                    MOST POPULAR
                  </span>
                )}

                <h2 className="text-lg font-semibold mb-2">{plan.name}</h2>
                <h1 className="text-3xl font-bold mb-4">{plan.price}</h1>

                <ul className="mb-6 space-y-2 flex-1">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center text-gray-200">
                      <span className="w-5 h-5 mr-2 inline-flex items-center justify-center bg-orange-400 text-gray-900 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-auto py-2 px-6 rounded-lg font-bold transition-colors duration-200 ${
                    plan.popular
                      ? "bg-orange-400 text-gray-900 hover:bg-orange-500"
                      : "bg-indigo-500 hover:bg-indigo-600"
                  }`}
                >
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
