function PromotionalSection() {
  return (
    <section className="w-[80%] mx-auto py-32">
      <div className="grid [750px]:grid-cols-1 lg:grid-cols-2 gap-8 [805]:grid-cols-2">
        <div className="grid gap-6 grid-rows-[1.5fr_1fr]">
          <div className="bg-neutral-white-60 px-6 py-10 rounded-[48px]">
            <p className="text-sm md:text-title_2 lg:text-title_1 font-medium md:w-[30ch] mx-auto">
              {`Whether you're facing high-stake exams or simply trying to ace your
            courses, we've got you covered.`}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-text-color text-neutral-white-10 lg:px-12 lg:py-8 md:py-7 md:px-8 p-7 rounded-[32px] md:rounded-[40px] lg:rounded-[48px]">
              <p className="text-sm md:text-title_2 lg:text-title_1 font-medium mb-2">
                Boost Exam <br /> Confidence
              </p>
              <p className=" md:text-3xl mt-4">
                <span className="font-medium text-[32px] md:text-[36px] lg:text-[42px]">
                  30%
                </span>{" "}
                <span className="text-[16px] md:text-[28px] lg:text-[32px]">
                  Higher
                </span>
              </p>
            </div>

            <div className="bg-neutral-white-60 lg:px-12 lg:py-8 md:py-7 md:px-8 p-7 rounded-[32px] md:rounded-[40px] lg:rounded-[48px]">
              <div className="text-sm md:text-title_2 lg:text-title_1 font-medium">
                <p className="mb-4">Boost Your Scores by an Average of</p>
                <p>
                  <span className="font-medium text-[32px] md:text-[36px] lg:text-[42px] ">
                    50
                  </span>{" "}
                  <span className="text-[16px] md:text-[28px] lg:text-[32px]">
                    Points
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_0.8fr] gap-4">
          {/* <div className="bg-emerald-200 rounded-2xl p-4 aspect-[3/4]"> */}
          <img
            src="/adv-1.png"
            alt="Student with ID card"
            className="w-full h-full object-cover rounded-xl"
          />
          {/* </div> */}
          {/* <div className="bg-orange-200 rounded-2xl p-4"> */}
          <img
            src="/adv-2.png"
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
