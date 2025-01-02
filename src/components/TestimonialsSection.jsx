import Testimonials from "./Testimonials";

export default function TestimonialSection() {
  return (
    <section className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto py-12 md:py-24'>
      <h2 className='text-[24px] sm:text-[32px] font-semibold text-center mb-8 md:mb-16  mx-auto'>
        What Our Users Say
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12'>
        <div className='max-w-[300px] md:max-w-[400px] mx-auto lg:mx-0'>
          <img src='/group-test.svg' alt='group' className='w-full h-auto' />
        </div>
        <Testimonials />
      </div>
    </section>
  );
}
