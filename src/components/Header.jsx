import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
  const [isIntersecting, setIsIntersecting] = useState(true);
  const ref = useRef(document.querySelector("header"));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root: null,
        threshold: [0],
        rootMargin: `-${ref.current?.getBoundingClientRect().height}px`,
      }
    );

    const section = document.querySelector("section");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [isIntersecting]);

  return (
    <header
      ref={ref}
      className={`flex justify-between items-center px-8 py-4 w-full duration-300 bg-white transition-all z-50 ${
        !isIntersecting ? "fixed top-0 left-0 opacity-[0.95] shadow-md" : ""
      }`}
    >
      <Logo />
      <Nav />
    </header>
  );
}