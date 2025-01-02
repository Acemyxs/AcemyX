import { useState } from "react";

export default function PricingSection() {
  const [planType, setPlanType] = useState("individual");

  const pricingData = {
    individual: [
      {
        title: "Free Plan",
        description: "Experience AcemyX at No Cost",
        price: "FREE",
        period: "",
        features: [
          "Limited access to explore the platform.",
          "No commitment, risk-free trial.",
          { text: "", hideCheckmark: true },
          // "Basic Socrates AI access
          // "Basic Socrates AI access",
        ],
        buttonText: "Get Started",
        buttonStyle: "bg-[#80e5b1] hover:bg-[#3dc871]",
      },
      {
        title: "Standard",
        description: "Unlock Full Access to Your Course",
        price: "N500",
        period: "/month",
        features: [
          "Unlimited questions and study notes.",
          "Access to Socratic AI tutor.",
          "Comprehensive mock tests and progress tracking.",
        ],
        buttonText: "Get Started",
        buttonStyle: "bg-black hover:bg-opacity-[0.8]",
      },
      {
        title: "Standard",
        description:
          "Enjoy the same full access with a 20% discount when paid upfront.",
        price: "N1200",
        period: "/3 months",
        features: [
          "Unlimited questions, study notes, AI tutor.",
          "Mock tests, progress tracking.",
          "Premium Socrates AI",
        ],
        buttonText: "Get Started",
        buttonStyle: "bg-black hover:bg-opacity-[0.8]",
      },
    ],
    enterprise: [
      {
        title: "Enterprise Plan",
        description: "Tailored Solutions for Institutions",
        price: "Custom",
        period: " Pricing",
        features: [
          "Every feature On Standard Plan and more.",
          "Scaled access for students.",
          " Dedicated sales team support.",
          { text: "", hideCheckmark: true },
        ],
        buttonText: "Contact Sales for Details",
        buttonStyle: "bg-black hover:bg-opacity-[0.8]",
      },
    ],
  };

  return (
    <section id='pricing' className='py-24 w-[80%] mx-auto'>
      <h1 className='text-3xl font-semibold text-center mb-12'>
        Affordable Plans for every learner
      </h1>

      <div className='mx-auto bg-neutral-white-40 w-fit p-2 rounded-full mb-12'>
        <button
          onClick={() => setPlanType("individual")}
          className={`px-6 py-3 rounded-full font-semibold transition-colors ${
            planType === "individual"
              ? "bg-neutral-white-10 "
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Individual
        </button>
        <button
          onClick={() => setPlanType("enterprise")}
          className={`px-6 py-3 rounded-full font-semibold transition-colors ${
            planType === "enterprise"
              ? "bg-neutral-white-10 "
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Enterprise
        </button>
      </div>

      <div
        className={`grid gap-8 max-w-6xl mx-auto p-4 ${
          planType === "enterprise" ? "grid-cols-1 max-w-md" : "md:grid-cols-3"
        }`}
      >
        {pricingData[planType].map((plan, index) => (
          <div key={index} className='rounded-2xl p-6 bg-white shadow-sm'>
            <h2 className='font-semibold text-xl'>{plan.title}</h2>
            <p className='text-gray-700 mt-2 text-sm text-[12px]'>
              {plan.description}
            </p>
            <div className='my-3'>
              <span
                className={`${
                  plan.title === "Free Plan"
                    ? "text-[#80e5b1] text-3xl"
                    : plan.title === "Enterprise Plan"
                    ? "text-xl"
                    : "text-xl"
                } font-medium my-6`}
              >
                {plan.price}
              </span>
              <span className='text-sm font-medium'>{plan.period}</span>
            </div>
            <div className='h-[1px] bg-gray-200 mb-4'></div>

            <ul className='space-y-4 mb-8 text-[12px] font-medium'>
              {plan.features.map((feature, i) => (
                <li key={i} className='flex items-center gap-2'>
                  <svg
                    className={`w-5 h-5 text-[#80e5b1] ${
                      typeof feature === "object" && feature.hideCheckmark
                        ? "invisible"
                        : ""
                    }`}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>
                    {typeof feature === "object" ? feature.text : feature}
                  </span>
                </li>
              ))}
            </ul>
            {planType === "enterprise" ? (
              <button
                className={`w-full py-2.5 md:py-3 px-3 md:px-4 rounded-xl text-white font-medium transition-all text-[12px] md:text-[14px] whitespace-nowrap ${plan.buttonStyle}`}
              >
                Contact Sales for Details
              </button>
            ) : (
              <button
                className={`w-full py-3 px-4 rounded-xl text-white font-medium transition-all ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
