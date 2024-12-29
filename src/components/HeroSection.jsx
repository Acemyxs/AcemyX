import ButtonCta from "./ButtonCta";

function HeroSection() {
  return (
    <section className="relative h-screen">
      <h1 className="text-center text-6xl font-bold leading-tight w-[15ch] mx-auto mt-16 mb-8">
        Elevate{" "}
        <span className="text-orange-600">
          your
          <br /> JAMB
        </span>{" "}
        scores with AcemyX.
      </h1>
      <p className="text-center w-[55ch] text-gray-500 font-medium mx-auto mb-8">
        Your trusted virtual learning platform to excel in exams and beyond.
        Explore study tools, practice questions, and personalized mentorship
        anytime, anywhere.
      </p>
      <div className="flex justify-center">
        <ButtonCta>Sign up for free</ButtonCta>
      </div>
      <img
        src="/hero.svg"
        alt="Student studying"
        className="absolute bottom-0 right-0 w-1/3"
      />
    </section>
  );
}

export default HeroSection;
