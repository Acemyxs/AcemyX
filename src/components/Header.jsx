import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white">
      <Logo />
      <Nav />
    </header>
  );
}
