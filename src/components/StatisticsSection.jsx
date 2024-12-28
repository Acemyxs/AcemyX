export default function StatisticsSection() {
  return (
    <section className="w-[80%] mx-auto pb-32">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">3k</span>
          <p>Students Enrolled</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">500+</span>
          <p>Practice Quizzes & Exams</p>
        </div>{" "}
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">300k</span>
          <p>Curated Questions</p>
        </div>{" "}
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">99.9%</span>
          <p>Uptime for 24/7 Access</p>
        </div>
      </div>
    </section>
  );
}
