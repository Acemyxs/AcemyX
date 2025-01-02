export default function PricingSection() {
  return (
    <section id='pricing' className='py-24 w-[80%] mx-auto'>
      <h1 className='text-3xl font-semibold text-center mb-12'>
        Affordable Plans for every learners
      </h1>
      <div className='grid gap-8 md:grid-cols-3 max-w-6xl mx-auto p-4'>
        {/* Free Tier */}
        <div className='rounded-2xl p-6 bg-white shadow-sm'>
          <h2 className='font-semibold text-xl'>Free Plan</h2>
          <p className='text-gray-700 mt-2 text-sm text-[12px]'>
            Experience AcemyX at No Cost
          </p>
          <div className='my-3'>
            <span className='text-[#80e5b1] text-4xl font-medium'>FREE</span>
            <span className='opacity-0 invisible text-sm font-medium'></span>
          </div>
          <div className='h-[1px] bg-gray-200 mb-4'></div>

          <ul className='space-y-4 mb-8 text-[12px] font-medium'>
            <li className='flex items-center gap-2'>
              <svg
                className='w-5 h-5 text-[#80e5b1]'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span>Limited access to explore the platform.</span>
            </li>
            <li className='flex items-center gap-2'>
              <svg
                className='w-5 h-5 text-[#80e5b1]'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span>No commitment, risk-free trial.</span>
            </li>
            <li className='flex items-center gap-2 invisible opacity-0'>
              <svg
                className='w-5 h-5 text-[#80e5b1]'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span>Comprehensive mock tests and progress tracking.</span>
            </li>
          </ul>
          <button className='w-full py-3 px-4 rounded-xl bg-[#80e5b1] text-white font-medium hover:bg-[#3dc871] transition-colors'>
            Get Started
          </button>
        </div>

        {/* Basic Tier */}
        <div className='rounded-2xl p-6 bg-white shadow-sm'>
          <h2 className='font-semibold text-xl'>Basic</h2>
          <p className='text-gray-700 mt-2 text-sm text-[12px]'>
            Unlock Full Access to Your Course
          </p>
          <div className='my-3'>
            <span className='text-4xl font-medium'>N500</span>
            <span className='text-sm font-medium'>/month</span>
          </div>
          <div className='h-[1px] bg-gray-200 mb-4'></div>

          <ul className='space-y-4 mb-8 text-[12px] font-medium'>
            <li className='flex items-center gap-2'>
              <svg
                className='w-5 h-5 text-[#80e5b1]'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span>Unlimited questions and study notes.</span>
            </li>
            <li className='flex items-center gap-2'>
              <svg
                className='w-5 h-5 text-[#80e5b1]'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span>Access to Socratic AI tutor.</span>
            </li>
            <li className='flex items-center gap-2'>
              <svg
                className='w-5 h-5 text-[#80e5b1]'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span>Comprehensive mock tests and progress tracking.</span>
            </li>
          </ul>
          <button className='w-full py-3 px-4 rounded-xl bg-black text-white font-medium hover:bg-opacity-[0.8] transition-all'>
            Get Started
          </button>
        </div>

        {/* Standard Tier */}
        <div className='rounded-2xl p-6 bg-white'>
          <h2 className='font-semibold text-xl'>Standard</h2>
          <p className='text-gray-700 mt-2 text-sm text-[12px]'>
            Enjoy the same full access with a 20% discount when paid upfront.
          </p>
          <div className='my-3'>
            <span className='text-4xl font-medium'>N1200</span>
            <span className='text-sm font-medium'>/3 months</span>
          </div>
          <div className='h-[1px] bg-gray-200 mb-4'></div>

          <ul className='space-y-4 mb-8 text-[12px] font-medium'>
            <li className='flex items-center gap-2'>
              <svg
                className='w-10 h-10 text-[#80e5b1]'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span>
                Unlimited questions, study notes, AI tutor, mock tests, progress
                tracking, peer forums, and more.
              </span>
            </li>
            <li className='flex items-center gap-2'>
              <svg
                className='w-5 h-5 text-[#80e5b1]'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span>Premium Socrates AI</span>
            </li>
            {/* <li className='flex items-center gap-2 invisible opacity-0'>
              <svg
                className='w-5 h-5 text-[#80e5b1]'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span>free.</span>
            </li> */}
          </ul>
          <button className='w-full py-3 px-4 rounded-xl bg-black text-white font-medium hover:bg-opacity-[0.8] transition-all'>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
