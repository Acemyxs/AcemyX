/* eslint-disable react/prop-types */
import Rating from "./Rating";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className='w-full md:max-w-[700px] flex-shrink-0 px-3 md:px-4'>
      <div className='p-4 md:p-6 rounded-lg   min-h-[200px] md:min-h-[250px] flex flex-col'>
        <p className='text-gray-700 text-[14px] md:text-[16px] flex-grow mb-4'>
          {testimonial.text}
        </p>
        <div className='flex items-center gap-2 md:gap-3'>
          <img
            src={"/shola.png"}
            alt={testimonial.name}
            className='w-8 h-8 md:w-10 md:h-10 rounded-full object-cover'
          />
          <div>
            <h3 className='font-semibold text-[14px] md:text-[16px]'>
              {testimonial.name}
            </h3>
            <Rating />
          </div>
        </div>
      </div>
    </div>
  );
}
