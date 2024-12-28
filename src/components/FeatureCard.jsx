/* eslint-disable react/prop-types */
export default function FeatureCard({ index }) {
  return (
    <div>
      <img src={`/feat-${index}.svg`} alt="feature" />
    </div>
  );
}
