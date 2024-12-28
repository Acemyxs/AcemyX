import HeroSection from "../components/HeroSection";
import NavigationSection from "../components/NavigationSection";
import FeactureSection from "../components/FeactureSection";
// import Header from "../components/Header";

function Home() {
  return (
    <div>
      {/* <Header /> */}
      <NavigationSection />
      <HeroSection />
      <FeactureSection />
    </div>
  );
}

export default Home;
