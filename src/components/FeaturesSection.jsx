import FeatureCards from "./FeatureCards";

export default function FeaturesSection() {
  return (
    <section id='features' className='w-[80%] md:w-[90%] mx-auto py-16'>
      <h2 className='text-[24px] sm:text-[32px] lg:text-4xl font-bold text-center max-w-[20ch] sm:max-w-[25ch] mx-auto mb-4 md:mb-6'>
        Features for Exceptional Performance
      </h2>

      <p className='text-[14px] sm:text-[14px] w-full md:w-[50ch] font-medium md:mx-auto md:text-center mb-8 md:mb-12 text-gray-500 mx-auto text-center'>
        Access everything you need to ace your exams in one place.
      </p>
      <div className='grid items-center justify-center'>
        <FeatureCards />
      </div>
    </section>
  );
}
