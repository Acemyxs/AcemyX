import FeaturedInLogos from "./FeaturedInLogos";

export default function FeaturedInSection() {
  return (
    <section className="w-[80%] mx-auto py-24">
      <div>
        <h3 className="text-2xl text-gray-500 font-medium mx-auto text-center py-2">
          Featured in some Popular organization
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-auto w-fit mt-5 gap-6 ">
          {Array.from({ length: 4 }, (_, i) => i + 1).map((i) => (
            <FeaturedInLogos index={i} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
