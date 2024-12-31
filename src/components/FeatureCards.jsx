import FeatureCard from "./FeatureCard";

export default function FeatureCards() {
  return (
    <div className='grid gap-8  grid-cols-4 justify-center items-center'>
      {Array.from({ length: 4 }, (_, i) => i + 1).map((i) => (
        <FeatureCard key={i} index={i} />
      ))}
    </div>
  );
}
