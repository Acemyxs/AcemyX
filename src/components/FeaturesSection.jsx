import FeatureCards from "./FeatureCards";

export default function FeaturesSection() {
  return (
    <section className="w-[80%] mx-auto py-32">
      <h1 className="text-2xl font-bold text-center w-[25ch] mx-auto mb-8">
        Features for exceptional performance
      </h1>
      <p className="w-[55ch] font-medium mx-auto text-center mb-8 text-gray-500">
        Use practice tests to get ready for real exams. Get instant feedback,
        monitor your progress, and work on improving, all through AcemyX
      </p>
      <div>
        <FeatureCards />
      </div>
    </section>
  );
}
