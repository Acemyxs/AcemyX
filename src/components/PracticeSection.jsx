import { useState } from "react";
import ExamCard from "./ExamCard";

export default function PracticeSection() {
  const [practice, setPractice] = useState("general");

  return (
    <section className='max-w-[80%] mx-auto py-32'>
      <div>
        <h2 className='text-2xl lg:text-4xl md:text-3xl font-bold text-center max-w-[25ch] mx-auto mb-6'>
          Practice for your Exam with real test similation
        </h2>
        <p className='max-w-[50ch] font-medium mx-auto text-center mb-12 text-gray-500 lg:w-[75]'>
          Use practice tests to get ready for real exams. Get instant feedback,
          monitor your progress, and work on improving, all through AcemyX
        </p>
      </div>
      <div className='mx-auto bg-slate-200 w-fit p-2 rounded-full mb-12'>
        <button
          onClick={() => setPractice("general")}
          className={`px-6 py-3 rounded-full font-semibold ${
            practice === "general" ? "bg-white" : ""
          }`}
        >
          General
        </button>
        <button
          onClick={() => setPractice("subject")}
          className={`px-6 py-3 rounded-full font-semibold ${
            practice === "subject" ? "bg-white" : ""
          }`}
        >
          Subject
        </button>
      </div>
      {<ExamCard />}
    </section>
  );
}
