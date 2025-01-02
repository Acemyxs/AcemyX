import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { value: 3000, suffix: "+", label: "Students Enrolled" },
    { value: 50000, suffix: "+", label: "Practice Quizzes" },
    { value: 10, suffix: "x", label: "Faster Exam Prep" },
    { value: 92, suffix: "%", label: "Exam Success Rate" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className='w-[90%] md:w-[80%] mx-auto pb-16 mt-6'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
        {stats.map((stat, index) => (
          <div key={index} className='flex flex-col items-center'>
            <CountUp
              className='text-[24px] sm:text-[32px] lg:text-5xl mb-2 font-bold'
              start={0}
              end={stat.value}
              suffix={stat.suffix}
              duration={2}
              decimals={stat.value % 1 !== 0 ? 1 : 0}
              useEasing={true}
              redraw={true}
              preserveValue={false}
              key={isVisible ? 1 : 0}
            />
            <p className=' text-[14px] md:text-base font-medium text-center'>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
