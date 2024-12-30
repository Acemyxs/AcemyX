import ButtonCta from "./ButtonCta";
import CTAcard from "./CTAcard";

export default function CTASection() {
  return (
    <section className='w-[90%] md:w-[80%] mx-auto py-16 md:py-24'>
      <div className='text-center mx-auto'>
        <h2 className='text-[24px] sm:text-[32px] font-bold max-w-[35ch] sm:max-w-[30ch] mx-auto mb-4 md:mb-6'>
          Discover your abilities with the AcemyX Academic Platform!
        </h2>
        <p className='text-[14px] sm:text-[16px] w-[50ch] sm:w-[60ch] md:w-[75ch] font-medium mx-auto text-center mb-8 md:mb-12 text-gray-500'>
          With AcemyX, you’re not just preparing for exams—you’re building the
          skills and confidence to succeed in life. Let’s start your journey to
          success together.
        </p>
      </div>

      <div className='flex justify-center mt-4 mb-8'>
        <ButtonCta className='py-1.5 px-3 md:py-2.5 md:px-5 text-sm md:text-base font-medium'>
          Get Access Now!
        </ButtonCta>
      </div>

      <CTAcard />
    </section>
  );
}
