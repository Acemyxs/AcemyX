import ButtonCta from "./ButtonCta";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [headerText, setHeaderText] = useState(0);
  const headerTexts = [
    [
      <span key='line1'>
        <span className='text-primary'>Crush</span> Your
      </span>,
      <span key='line2'>
        <span className='text-primary'>JAMB</span> Goals
      </span>,
      <span key='line3'>
        with <span className='text-primary'>AcemyX</span>
      </span>,
    ],
    [
      <span key='line1'>
        <span className='text-primary'>Secure</span> A's
      </span>,
      <span key='line2'>
        in <span className='text-primary'>WAEC</span>
      </span>,
      <span key='line3'>
        with <span className='text-primary'>AcemyX</span>
      </span>,
    ],
    [
      <span key='line1'>
        <span className='text-primary'>Ace</span> Your
      </span>,
      <span key='line2'>
        <span className='text-primary'>Exams</span>
      </span>,
      <span key='line3'>
        with <span className='text-primary'>AcemyX</span>
      </span>,
    ],
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeaderText((prev) => (prev + 1) % headerTexts.length);
    }, 5000); // Change text every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

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
      <h1 className='text-[32px] md:text-[48px] lg:text-[80px] font-bold leading-tight mb-4'>
        {headerTexts[headerText].map((line, index) => (
          <span
            key={index}
            className='block transition-opacity duration-500 ease-in-out'
          >
            {line}
          </span>
        ))}
      </h1>

      <p className='text-[14px] md:text-[16px] text-gray-500 font-medium mx-auto mt-4 mb-8 max-w-[30ch] md:max-w-[45ch]'>
        Access innovative study tools, exam-focused practice questions, and a
        personalized AI Tutor tailored to your success—anytime, anywhere.
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
