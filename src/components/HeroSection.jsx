import ButtonCta from "./ButtonCta";
function HeroSection() {
  return (
    <section
      id='home'
      className='relative h-[80vh] flex flex-col justify-center items-center text-center px-4'
    >
      <h1 className='text-[32px] md:text-[48px] lg:text-[80px] font-bold leading-tight max-w-[15ch] mx-auto'>
        Elevate{" "}
        <span className='text-primary'>
          your
          <br /> JAMB
        </span>{" "}
        scores with AcemyX.
      </h1>

      <p className='text-[14px] md:text-[16px] text-gray-500 font-medium mx-auto mt-4 mb-8 max-w-[30ch] md:max-w-[45ch]'>
        Your trusted virtual learning platform to excel in exams and beyond.
        Explore study tools, practice questions, and personalized mentorship
        anytime, anywhere.
      </p>

      <div className='flex justify-center'>
        <ButtonCta className='text-[14px] md:text-[16px] px-6 py-3 md:px-8 md:py-4'>
          <a href='https://academy.acemyx.com/'>Sign up for free</a>
        </ButtonCta>
      </div>
    </section>
  );
}

export default HeroSection;
