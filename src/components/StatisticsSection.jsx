import CountUp from "react-countup";

export default function StatisticsSection() {
  return (
    <section className="w-[80%] mx-auto pb-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="flex flex-col items-center">
          <CountUp
            className="text-5xl mb-2 font-bold"
            start={0}
            end={3}
            suffix="k"
            duration={2}
          />
          <p className="font-medium">Students Enrolled</p>
        </div>
        <div className="flex flex-col items-center">
          <CountUp
            className="text-5xl mb-2 font-bold"
            start={0}
            end={500}
            suffix="+"
            duration={2}
          />
          <p className="font-medium">Practice Quizzes & Exams</p>
        </div>{" "}
        <div className="flex flex-col items-center">
          <CountUp
            className="text-5xl mb-2 font-bold"
            start={0}
            end={300}
            suffix="k"
            duration={2}
          />
          <p className="font-medium">Curated Questions</p>
        </div>{" "}
        <div className="flex flex-col items-center">
          <CountUp
            className="text-5xl mb-2 font-bold"
            start={0}
            end={99}
            suffix=".9%"
            duration={2}
          />
          <p className="font-medium">Uptime for 24/7 Access</p>
        </div>
      </div>
    </section>
  );
}
