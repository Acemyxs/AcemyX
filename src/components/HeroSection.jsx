import ButtonCta from "./ButtonCta";
export default function HeroSection() {
  return (
    <section
      id='home'
      className='relative h-[80vh] flex flex-col justify-center items-center text-center px-4'
    >
      {/* <div className='absolute left-[10%] md:left-[20%] lg:left-[25%] top-[35%] md:top-32'>
        <img
          src='/star.svg'
          alt='star'
          className='w-8 h-8 md:w-10 md:h-10 animate-pulse'
        />
      </div> */}
      <h1 className='text-[32px] md:text-[48px] lg:text-[80px] font-bold leading-tight max-w-[15ch] mx-auto'>
        Elevate{" "}
        <span className='text-primary relative'>
          your
          <br /> JAMB
          <div className='absolute left-[15%] md:left-[25%] lg:left-[30%] top-[120%] md:top-[130%]'>
            <img
              src='/star.svg'
              alt='star'
              className='w-16 h-16 md:w-10 md:h-10 animate-pulse'
            />
          </div>
        </span>{" "}
        scores{" "}
        <span className='relative'>
          with
          <img
            src='/ring.svg'
            alt='ring'
            className='absolute -right-8 -bottom-12 w-24 h-24 z-10'
          />
        </span>{" "}
        AcemyX.
      </h1>

      <p className='text-[14px] md:text-[16px] text-gray-500 font-medium mx-auto mt-4 mb-8 max-w-[30ch] md:max-w-[45ch]'>
        Your trusted virtual learning platform to excel in exams and beyond.
        Explore study tools, practice questions, and personalized mentorship
        anytime, anywhere.
      </p>

      <div className='flex justify-center'>
        <ButtonCta className='text-[14px] md:text-[16px] px-6 py-3 md:px-8 md:py-4'>
          <a
            href='https://academy.acemyx.com/login/signup.php?'
            target='_blank'
          >
            Sign up for free
          </a>
        </ButtonCta>
      </div>
    </section>
  );
}
