import { useState } from "react";
import ExamCard from "./ExamCard";
import SubjectCard from "./subjectCard";

export default function PracticeSection() {
  const [practice, setPractice] = useState("general");

  return (
    <section className='max-w-[80%] mx-auto py-32'>
      <div>
        <h2 className='text-2xl lg:text-4xl md:text-3xl font-bold text-center max-w-[25ch] mx-auto mb-6'>
          Practice Smarter with Real Exam Simulations
        </h2>
        <p className='max-w-[50ch] font-medium mx-auto text-center mb-12 text-neutral-black-10 lg:w-[75]'>
          Prepare for real exams with practice tests that deliver instant
          feedback, track your progress, and help you improve—all with AcemyX.
        </p>
      </div>
      <div className='mx-auto bg-neutral-white-40 w-fit p-2 rounded-full mb-12'>
        <button
          onClick={() => setPractice("general")}
          className={`px-6 py-3 rounded-full font-semibold ${
            practice === "general" ? "bg-neutral-white-10" : ""
          }`}
        >
          General
        </button>
        <button
          onClick={() => setPractice("subject")}
          className={`px-6 py-3 rounded-full font-semibold ${
            practice === "subject" ? "bg-neutral-white-10" : ""
          }`}
        >
          Subject
        </button>
      </div>
      {practice === "general" ? <ExamCard /> : <SubjectCard />}
    </section>
  );
}
