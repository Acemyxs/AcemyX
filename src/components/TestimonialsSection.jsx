import Testimonials from "./Testimonials";

export default function TestimonialSection() {
  return (
    <section className="w-[80%] mx-auto py-32">
      <h2 className="text-4xl font-bold text-center mb-12">
        Here’s what our users have to say about their experience with us
      </h2>
      <div className="grid grid-cols-2 gap-8">
        <div></div>
        <Testimonials />
      </div>
    </section>
  );
}
