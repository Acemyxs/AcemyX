import ExamCard from "./ExamCard";

export default function PracticeSection() {
  return (
    <div>
      <div>
        <h1 className="text-3xl w-[28ch] py-3 text-center font-bold mx-auto leading-10">
          Practice for your Exam with real test similation
        </h1>
        <p className="mx-auto text-center text-lg w-[65ch] ">
          Use practice tests to get ready for real exams. Get instant feedback,
          monitor your progress, and work on improving, all through AcemyX
        </p>
      </div>
      <div>
        <div>
          <div className="text-center mx-auto  my-4 bg-slate-200 w-fit py-4 px-2 rounded-full">
            <span className="px-7 py-3 bg-white rounded-full font-semibold">
              General
            </span>
            <span className="px-6 py-3 font-semibold">Subject</span>
          </div>
        </div>
      </div>
      <ExamCard />
    </div>
  );
}
