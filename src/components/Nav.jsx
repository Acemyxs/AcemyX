export default function Nav() {
  const navLinks = ["home", "features", "pricing", "testimonial"];
  return (
    <nav>
      <ul className="flex gap-12 items-center">
        {navLinks.map((link) => (
          <li key={link}>
            <a href={`#${link}`} className="capitalize font-medium">
              {link}
            </a>
          </li>
        ))}
        <button className="inline-flex items-center gap-2 rounded-full py-3 px-5 border-2 text-orange-600 border-orange-600 hover:text-white font-medium hover:bg-orange-600 transition-all duration-300 shadow-sm hover:shadow-md">
          <span>Sign up</span>
          <img src="/Arrowup.svg" alt="arrow" className="w-6 h-6" />
        </button>
      </ul>
    </nav>
  );
}
