import ButtonCta from "./ButtonCta";
import CTAcard from "./CTAcard";

export default function CTASection() {
  return (
    <section className='max-w-[80%] mx-auto py-24'>
      <div className='text-center mx-auto'>
        <h2 className='text-3xl font-medium max-w-[30ch] mx-auto mb-4'>
          Discover your abilities with the AcemyX Academic Platform!
        </h2>
        <p className='md:w-[50ch] mx-auto text-center mb-12 text-gray-500'>
          With AcemyX, you’re not just preparing for exams—you’re building the
          skills and confidence to succeed in life. Let’s start your journey to
          success together.
        </p>
      </div>
      <div className='flex justify-center mt-6'>
        <ButtonCta className='py-7 px-8 text-sm font-semibold'>
          Get Access Now!
        </ButtonCta>
      </div>
      <CTAcard />
    </section>
  );
}
