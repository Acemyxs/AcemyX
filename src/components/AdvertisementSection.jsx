function PromotionalSection() {
  return (
    <section className='w-[80%] mx-auto py-32'>
      <div className='grid [750px]:grid-cols-2 md:grid-cols-2 gap-8'>
        <div className='grid gap-6 grid-rows-[1.5fr_1fr]'>
          <div className='bg-neutral-white-60 px-6 py-10 rounded-[48px]'>
            <p className='text-xl font-medium md:w-[30ch] mx-auto'>
              {`Whether you're facing high-stakes exams or simply trying to ace your
            courses, we've got you covered.`}
            </p>
          </div>
          <div className='grid grid-cols-2 gap-6'>
            <div className='bg-text-color text-neutral-white-10 p-6  md:px-10 md:py-6 rounded-[48px]'>
              <p className='text-[14px] md:text-[24px] font-medium mb-2'>
                Boost Exam <br /> Confidence
              </p>
              <p className=' md:text-3xl mt-8'>
                <span className='font-semibold text-2xl md:text-3xl '>30%</span>{" "}
                <span className='text-[12px] md:text-[24px]'>Higher</span>
              </p>
            </div>

            <div className='bg-neutral-white-60 md:px-10 md:py-6  p-6 rounded-[48px]'>
              <p className=' text-[14px] lg:w-[16ch] md:text-[24px] font-medium mb-2'>
                Boost Your Scores by an Average of 50 Points
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
