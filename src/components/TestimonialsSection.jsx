import Testimonials from "./Testimonials";

export default function TestimonialSection() {
  return (
    <section className="w-[80%] mx-auto py-32">
      <h2 className="text-2xl font-bold text-center mb-14">
        Here’s what our users have to say about their experience with us
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img src="/Group 105.png" alt="group" className="block w-full" />
        </div>
        <Testimonials />
      </div>
    </section>
  );
}
