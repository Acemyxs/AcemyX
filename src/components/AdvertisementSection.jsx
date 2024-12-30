function PromotionalSection() {
  return (
    <section className='w-[80%] mx-auto py-32'>
      <div className='grid [750px]:grid-cols-2 md:grid-cols-2 gap-8'>
        <div className='grid gap-6 grid-rows-[1.5fr_1fr]'>
          <div className='bg-white px-6 py-10 rounded-3xl'>
            <p className='text-xl font-medium md:w-[30ch] mx-auto'>
              {`Whether you're facing high-stakes exams or simply trying to ace your
            courses, we've got you covered.`}
            </p>
          </div>
          <div className='grid grid-cols-2 gap-6'>
            <div className='bg-gray-900 text-white p-6 rounded-3xl'>
              <p className='text-[12px] md:text-lg font-medium mb-2'>
                Boost your Confidence
              </p>
              <p className='text-3xl'>
                <span className='font-semibold'>20%</span> Higher
              </p>
            </div>

            <div className='bg-white p-6 rounded-2xl'>
              <p className='text-[12px] md:text-lg font-medium mb-2'>
                Increase Comprehension
                <br /> by up to{" "}
                <span className='text-4xl font-semibold translate-y-1/2 translate-x-1/4 inline-block'>
                  80%
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-[1fr_0.8fr] gap-4'>
          {/* <div className="bg-emerald-200 rounded-2xl p-4 aspect-[3/4]"> */}
          <img
            src='/adv-1.svg'
            alt='Student with ID card'
            className='w-full h-full object-cover rounded-xl'
          />
          {/* </div> */}
          {/* <div className="bg-orange-200 rounded-2xl p-4"> */}
          <img
            src='/adv-2.svg'
            alt='Student in professional attire'
            className='w-full h-full object-cover rounded-xl'
          />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}

export default PromotionalSection;
