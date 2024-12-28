import FeatureCard from "./FeatureCard";

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }, (_, i) => i + 1).map((i) => (
        <FeatureCard key={i} index={i} />
      ))}
    </div>
  );
}
