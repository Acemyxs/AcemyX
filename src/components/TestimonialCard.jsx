/* eslint-disable react/prop-types */
import Rating from "./Rating";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className='max-w-full flex-shrink-0 px-4'>
      <div className='p-6 rounded-lg min-h-[250px] flex flex-col'>
        <p className='text-gray-700 text-sm flex-grow'>{testimonial.text}</p>
        <div className='flex items-center gap-3 mb-4'>
          <img src={"/shola.png"} alt='' className='w-10 h-10 rounded-full' />
          <div>
            <h3 className='font-semibold'>{testimonial.name}</h3>
            <Rating />
          </div>
        </div>
      </div>
    </div>
  );
}
