export default function FooterCopy() {
  return (
    <section className='bg-gray-950 text-white'>
      <div className='py-16 grid grid-cols-1 lg:grid-cols-[3fr_1fr]   gap-8 items-start justify-center mx-auto px-8'>
        <div className='container mx-auto px-4'>
          <h1 className='text-[24px] md:text-[36px] lg:text-[40px] font-semibold mb-12'>
            Ready to transform your Learning?
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
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
        <div className='container  lg:pt-0 lg:mt-0 mx-auto px-4'>
          {/* Social Media Links */}
          <div className='flex flex-wrap gap-4 mb-8'>
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
            <h3 className='text-[20px] font-regular mb-4'>
              Stay connected with us.
            </h3>

            {/* Email Input */}
            <div className=' mb-4 relative '>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-[80%] bg-transparent border-b border-gray-700 pb-2 pr-10 focus:outline-none focus:border-gray-500 text-sm placeholder-gray-500 '
              />
              <button className='absolute right-0 bottom-2 text-gray-400 hover:text-white transition-colors z-10'>
                <img src='mail.svg' alt='' className='w-4 h-4' />
              </button>
            </div>

            {/* WhatsApp Button */}
            {/* WhatsApp Button */}
            <button className='mt-6 bg-[#2CA94C] text-white px-[24px] py-[16px] rounded-[16px] flex items-center space-x-2 hover:bg-green-600 transition-colors'>
              <img src='whatsapp.svg' alt='' className='w-8 h-8' />
              <span className='text-[16px]'>WhatsApp Message</span>
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
