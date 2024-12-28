function HeroSection() {
  return (
    <section className='relative h-screen'>
      <div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 text-center w-full px-4'>
        <h1 className='font-bold leading-tight text-[80px]'>
          Elevate{" "}
          <span className='text-[#ff7340]'>
            your <br /> JAMB
          </span>{" "}
          score with <br /> AcemyX.
        </h1>

        <p className='max-w-5xl mx-auto text-[20px] mt-4 text-gray-700 font-medium'>
          Your trusted virtual learning platform to excel in exams and beyond.
          Explore study tools, practice questions, and personalized mentorship
          anytime, anywhere.
        </p>

        {/* Tailwind-styled button */}
        <button
          className='
    inline-block
    mt-8
    px-[3rem]
    py-[1.5rem]
    bg-[#ff7340]
    text-white
    text-[1.6rem]
    font-medium
    rounded-[30px]
    no-underline
    hover:opacity-90
    transition
    duration-300
  '
        >
          Sign up for free
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
