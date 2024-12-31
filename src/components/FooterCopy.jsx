export default function FooterCopy() {
  return (
    <section className='bg-gray-950 text-white'>
      <div className='py-16 grid grid-cols-1 lg:grid-cols-[3fr_1fr]   gap-8 items-center justify-center mx-auto px-8'>
        <div className='container mx-auto px-4'>
          <h1 className='text-[24px] md:text-[36px] lg:text-[40px] font-semibold mb-12'>
            Ready to transform your Learning?
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Logo and Description Section */}
            <div className='space-y-4 col-span-2'>
              <img src='acemyx-footer.svg' alt='AcemyX logo' className='h-10' />
              <p className='text-[#A9AEB4] text-[14px] md:text-[16] max-w-md '>
                Acemyx ensures every student has access to top-quality learning
                materials, expert mentorships and a supportive community to
                excel in WAEC, NECO and UTME exams.
              </p>
            </div>

            {/* Pages Section */}
            <div>
              <h3 className='text-lg font-semibold mb-6 items-center gap-2 lg:block hidden'>
                Pages
              </h3>
              <h3 className='text-[20px] md:text-[24px] font-regular mb-6 items-center gap-2 lg:hidden block'>
                List Pages
              </h3>
              <ul className='space-y-3 text-gray-400'>
                <li>
                  <a
                    href='#'
                    className='text-[#474C52] transition-colors font-semibold text-[14px] '
                  >
                    General
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Community
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Leaderboard
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className='text-lg font-semibold mb-6 flex items-center gap-2 invisible'>
                Contact
              </h3>
              <ul className='space-y-3 text-gray-400'>
                <li>
                  <a
                    href='#'
                    className='text-[#474C52] transition-colors font-semibold text-[14px] '
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Help Desk
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Support Acemyx
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Share your story
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='container mt-16 pt-6 lg:pt-0 lg:mt-0 mx-auto px-4'>
          {/* Social Media Links */}
          <div className='flex flex-wrap gap-4 mb-8 -ml-5'>
            <button className='flex items-center gap-2 px-4 py-2 rounded-full bg-transparent border border-gray-800 hover:border-gray-600 transition-colors'>
              <img src='instagram.svg' alt='' className='w-4 h-4' />
              <span className='text-sm'>Instagram</span>
            </button>

            <button className='flex items-center gap-2 px-4 py-2 rounded-full bg-transparent border border-gray-800 hover:border-gray-600 transition-colors'>
              <img src='facebook.svg' alt='' className='w-4 h-4' />
              <span className='text-sm'>Facebook</span>
            </button>

            <button className='flex items-center gap-2 px-4 py-2 rounded-full bg-transparent border border-gray-800 hover:border-gray-600 transition-colors'>
              <img src='ln.svg' alt='' className='w-4 h-4' />
              <span className='text-sm'>LinkedIn</span>
            </button>
          </div>

          {/* Stay Connected Section */}
          <div className='max-w-md'>
            <h3 className='text-sm mb-4'>Stay connected with us.</h3>

            {/* Email Input */}
            <div className=' mb-4'>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-[80%] bg-transparent border-b border-gray-700 pb-2 pr-10 focus:outline-none focus:border-gray-500 text-sm placeholder-gray-500 relative'
              />
              <button className='absolute right-0 bottom-2 text-gray-400 hover:text-white transition-colors z-10'>
                <img src='mail.svg' alt='' className='w-4 h-4' />
              </button>
            </div>

            {/* WhatsApp Button */}
            {/* WhatsApp Button */}
            <button className='mt-6 bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-600 transition-colors'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z' />
              </svg>
              <span>WhatsApp Message</span>
            </button>
          </div>
        </div>
      </div>
      <div className='py-8 mb text-center text-gray-400 text-sm mx-auto mt-20'>
        <p>© All Rights Reserved 2024 Acemyx</p>
      </div>
    </section>
  );
}
