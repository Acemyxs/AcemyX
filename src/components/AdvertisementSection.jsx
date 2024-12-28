function PromotionalSection() {
  return (
    <section className="w-[80%] mx-auto py-32">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left side with text and metrics */}
        <div className="space-y-8">
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-800 max-w-lg">
            {`Whether you're facing high-stakes exams or simply trying to ace your
            courses, we've got you covered.`}
          </p>

          <div className="grid grid-cols-2 gap-4">
            {/* Metric Card 1 */}
            <div className="bg-gray-900 text-white p-6 rounded-2xl">
              <p className="text-sm font-medium mb-2">Boost your Confidence</p>
              <p className="text-2xl font-bold">20% Higher</p>
            </div>

            {/* Metric Card 2 */}
            <div className="bg-gray-900 text-white p-6 rounded-2xl">
              <p className="text-sm font-medium mb-2">
                Increase Comprehension by up to
              </p>
              <p className="text-2xl font-bold">80%</p>
            </div>
          </div>
        </div>

        {/* Right side with images */}
        <div className="grid grid-cols-[1fr_0.8fr] gap-4">
          {/* <div className="bg-emerald-200 rounded-2xl p-4 aspect-[3/4]"> */}
          <img
            src="/adv-1.svg"
            alt="Student with ID card"
            className="w-full h-full object-cover rounded-xl"
          />
          {/* </div> */}
          {/* <div className="bg-orange-200 rounded-2xl p-4"> */}
          <img
            src="/adv-2.svg"
            alt="Student in professional attire"
            className="w-full h-full object-cover rounded-xl"
          />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}

export default PromotionalSection;
