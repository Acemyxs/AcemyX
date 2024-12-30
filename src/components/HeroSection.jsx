import ButtonCta from "./ButtonCta";

function HeroSection() {
  return (
    <section
      id='home'
      className='relative h-[90vh] flex flex-col justify-center items-center text-center px-4 py-10 mb-16 '
    >
      <h1 className='text-center text-4xl md:text-5xl lg:text-7xl font-bold leading-tight max-w-[15ch] mx-auto mt-16 mb-8  sm:text-3xl'>
        Elevate{" "}
        <span className='text-orange-600'>
          your
          <br /> JAMB
        </span>{" "}
        scores with AcemyX.
      </h1>
      <p className='text-center max-w-[55ch] text-gray-500 font-medium mx-auto mb-8  md:text-base md:w-[50ch]'>
        Your trusted virtual learning platform to excel in exams and beyond.
        Explore study tools, practice questions, and personalized mentorship
        anytime, anywhere.
      </p>
      <div className='flex justify-center'>
        <ButtonCta>Sign up for free</ButtonCta>
      </div>
    </section>
  );
}

export default HeroSection;
