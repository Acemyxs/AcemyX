import ButtonCta from "./ButtonCta";
import CTAcard from "./CTAcard";

export default function CTASection() {
  return (
    <section className='w-[80%] mx-auto py-32'>
      <div className='text-center mx-auto '>
        <h2 className='text-2xl font-bold w-[30ch] mx-auto mb-4'>
          Discover your abilities with the AcemyX Academic Platform!
        </h2>
        <p className='text-gray-700 text-md w-[50ch] mx-auto'>
          With AcemyX, you’re not just preparing for exams—you’re building the
          skills and confidence to succeed in life. Let’s start your journey to
          success together.
        </p>
      </div>
      <div className='flex justify-center mt-6'>
        <ButtonCta>Get Access Now</ButtonCta>
      </div>
      <CTAcard />
    </section>
  );
}
