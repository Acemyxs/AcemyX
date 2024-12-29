export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-16 px-12">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-semibold text-gray-100 ">
            Ready to transform your Learning?
          </h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors px-3 py-1 rounded-full border border-gray-800"
            >
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors px-3 py-1 rounded-full border border-gray-800"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors px-3 py-1 rounded-full border border-gray-800"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="mb-6">
              <img
                src="/acemyx-logo-light.svg"
                alt="Acemyx Logo"
                className="h-10"
              />
            </div>
            <p className="text-sm leading-relaxed">
              Acemyx ensures every students has access to top-quality learning
              materials, expert mentorships and a supportive community to excel
              in WAEC, NECO and UTME exams.
            </p>
          </div>

          {/* List of Pages */}
          <div>
            <h3 className="font-medium text-gray-100 mb-4">List of Pages</h3>
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-400">General</p>
              <nav className="flex flex-col space-y-3 text-sm">
                <a href="#" className="hover:text-white transition-colors">
                  Community
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Leaderboard
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms and Conditions
                </a>
              </nav>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-gray-100 mb-4">Contact</h3>
            <nav className="flex flex-col space-y-3 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Help Center
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Support Acemyx
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Share your story
              </a>
            </nav>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="font-medium text-gray-100 mb-4">
              Stay connected with us.
            </h3>
            <div className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent border-b border-gray-700 py-2 pr-4 flex-grow focus:outline-none focus:border-gray-500"
                />
                <button className="ml-2 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Social Links */}

            {/* WhatsApp Button */}
            <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-600 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
              </svg>
              <span>WhatsApp Message</span>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-sm text-gray-500">
          All Rights Reserved 2024 Acemyx
        </div>
      </div>
    </footer>
  );
}
