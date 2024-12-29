import Testimonials from "./Testimonials";

export default function TestimonialSection() {
  return (
    <section className="w-[80%] mx-auto py-24">
      <h2 className="text-3xl font-semibold text-center mb-16 w-[30ch] mx-auto">
        Here’s what our users have to say about their experience with us
      </h2>
      <div className="grid items-center md:grid-cols-2 gap-12">
        <div>
          <img src="/group-test.svg" alt="group" className="block w-full" />
        </div>
        <Testimonials />
      </div>
    </section>
  );
}
