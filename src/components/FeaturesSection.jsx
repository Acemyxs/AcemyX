import FeatureCards from "./FeatureCards";

export default function FeaturesSection() {
  return (
    <section className='w-[80%] md:w-[90%] mx-auto py-16'>
      <h2 className='text-[24px] sm:text-[32px] lg:text-4xl font-bold text-center max-w-[20ch] sm:max-w-[25ch] mx-auto mb-4 md:mb-6'>
        Features for exceptional performance
      </h2>

      <p className='text-[12px] sm:text-[12px] w-[40ch] sm:w-[50ch] md:w-[75ch] font-medium md:mx-auto md:text-center mb-8 md:mb-12 text-gray-500 mx-auto text-center'>
        Get study materials whenever you need them. An AI tool that helps you
        think critically and practice with over 50,000 questions that mimic real
        exams.
      </p>
      <div className='grid items-center justify-center'>
        <FeatureCards />
      </div>
    </section>
  );
}
