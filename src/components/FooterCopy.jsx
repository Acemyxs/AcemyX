export default function FooterCopy() {
  return (
    <section className='bg-[#0B0F17] text-white'>
      <div className='bg-[#0B0F17] text-white py-16 grid grid-cols-1 md:grid-cols-2  gap-8 px-16 items-center justify-center mx-auto '>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl font-semibold mb-12'>
            Ready to transform your Learning?
          </h1>

          <div className='grid grid-cols-1  lg:grid-cols-3 gap-8'>
            {/* Logo and Description Section */}
            <div className='space-y-4'>
              <img src='acemyx-footer.svg' alt='AcemyX logo' className='h-10' />
              <p className='text-gray-400 max-w-md'>
                Acemyx ensures every student has access to top-quality learning
                materials, expert mentorships and a supportive community to
                excel in WAEC, NECO and UTME exams.
              </p>
            </div>

            {/* Pages Section */}
            <div>
              <h3 className='text-lg font-semibold mb-6 flex items-center gap-2'>
                Pages
              </h3>
              <ul className='space-y-3 text-gray-400'>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
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
              <h3 className='text-lg font-semibold mb-6 flex items-center gap-2'>
                Contact
              </h3>
              <ul className='space-y-3 text-gray-400'>
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
        <div className='container mx-auto px-4'>
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
            <h3 className='text-sm mb-4'>Stay connected with us.</h3>

            {/* Email Input */}
            <div className='relative mb-4'>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full bg-transparent border-b border-gray-700 pb-2 pr-10 focus:outline-none focus:border-gray-500 text-sm placeholder-gray-500'
              />
              <button className='absolute right-0 bottom-2 text-gray-400 hover:text-white transition-colors'>
                <img src='mail.svg' alt='' className='w-4 h-4' />
              </button>
            </div>

            {/* WhatsApp Button */}
            <button className='flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1fb855] text-white py-2.5 px-4 rounded-lg transition-colors text-sm'>
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
