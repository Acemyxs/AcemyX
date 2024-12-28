export default function PricingSection() {
  return (
    <section className="py-32 w-[80%] mx-auto">
      <h1 className="text-2xl font-bold text-center mb-8">
        Affordable Plans for every learners
      </h1>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto p-4">
        {/* Free Tier */}
        <div className="rounded-2xl p-6 bg-white">
          <h2 className="font-semibold text-xl">Free</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Experience the platform risk-free and discover its potential.
          </p>
          <div className="my-6">
            <span className="text-[#4ADE80] text-4xl font-bold">FREE</span>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#4ADE80]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Limited Access to Resources</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#4ADE80]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>4-day free trial</span>
            </li>
          </ul>
          <button className="w-full py-3 px-4 rounded-xl bg-[#4ADE80] text-white font-medium hover:bg-[#3dc871] transition-colors">
            Get Started
          </button>
        </div>

        {/* Basic Tier */}
        <div className="rounded-2xl p-6 bg-white">
          <h2 className="font-semibold text-xl">Basic</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Get the essentials: unlimited questions and core resources at an
            affordable price.
          </p>
          <div className="my-6">
            <span className="text-4xl font-bold">N500</span>
            <span className="text-gray-400 text-sm">/month</span>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#4ADE80]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Unlimited Questions</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#4ADE80]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Limited Study Notes</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#4ADE80]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Active Peer Forum</span>
            </li>
          </ul>
          <button className="w-full py-3 px-4 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>

        {/* Standard Tier */}
        <div className="rounded-2xl p-6 bg-white">
          <h2 className="font-semibold text-xl">Standard</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Unlock your full learning potential with premium features and expert
            support.
          </p>
          <div className="my-6">
            <span className="text-4xl font-bold">N1200</span>
            <span className="text-gray-400 text-sm">/3 months</span>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#4ADE80]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Full Study Notes</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#4ADE80]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Premium Socrates AI</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#4ADE80]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Basic Features</span>
            </li>
          </ul>
          <button className="w-full py-3 px-4 rounded-xl bg-black text-white font-medium hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
