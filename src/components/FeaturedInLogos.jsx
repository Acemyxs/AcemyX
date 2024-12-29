// eslint-disable-next-line react/prop-types
export default function FeaturedInLogos({ index }) {
  return (
    <div>
      <img src={`/f-${index}.svg`} alt='featuredin logo' />
    </div>
  );
}
