import FeatureCards from "./FeatureCards";

export default function FeaturesSection() {
  return (
    <section className='w-[80%] mx-auto py-20' id='features'>
      <h2 className='text-4xl font-bold text-center w-[25ch] mx-auto mb-6'>
        Features for exceptional performance
      </h2>
      <p className='w-[75ch] font-medium mx-auto text-center mb-12 text-gray-500'>
        Get study materials whenever you need them. An AI tool that helps you
        think critically and practice with over 50,000 questions that mimic real
        exams.
      </p>
      <div>
        <FeatureCards />
      </div>
    </section>
  );
}
