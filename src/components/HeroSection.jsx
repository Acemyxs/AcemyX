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

        <p className='max-w-5xl mx-auto text-[20px] mt-4 text-gray-700 font-medium '>
          Your trusted virtual learning platform to excel in exams and beyond.
          Explore study tools, practice questions, and personalized mentorship
          anytime, anywhere.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
