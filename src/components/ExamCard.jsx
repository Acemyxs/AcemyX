export default function ExamCard() {
  const tests = [
    {
      id: 1,
      title: "JAMB Practice Test",
      description:
        "Ace your JAMB exam with our comprehensive practice questions to boost your confidence!",
      image: "/image23.png",
    },
    {
      id: 2,
      title: "WAEC Practice Test",
      description:
        "Assist students in getting ready for the West African examinations by providing practice questions and tracking their performance.",
      image: "/image19.png",
    },
    {
      id: 3,
      title: "Quiz Test",
      description:
        "The Quiz Test is a fun tool that boosts learning and confidence by providing instant feedback on knowledge assessment.",
      image: "/image23.png",
    },
  ];

  return (
    <div className='grid  justify-between px-40 mx-auto grid-cols-3 gap-5 items-center'>
      <div className='bg-slate-300 px-5 py-5 rounded-lg flex flex-col'>
        <img src='./image23.png' alt='' />
        <h1 className='text-xl font-bold py-2 '>Jamb Practice Text</h1>
        <p className='w-[30ch]'>
          Ace your JAMB exam with our practice test, featuring diverse questions
          to boost your confidence!
        </p>
      </div>
      <div className='bg-slate-300 px-5 py-5 rounded-lg flex flex-col'>
        <img src='./image23.png' alt='' />
        <h1 className='text-xl font-bold py-2 '>WAEC Practice Test</h1>
        <p className='w-[40ch]'>
          Assists students in getting ready for the West African Examinations
          Council assessments by providing practice questions and tracking their
          performance.
        </p>
      </div>
      <div className='bg-slate-300 px-5 py-5 rounded-lg flex flex-col'>
        <img src='./image23.png' alt='' />
        <h1 className='text-xl font-bold py-2 '>Quiz Test</h1>
        <p className='w-[30ch]'>
          The Quiz Test is a fun tool that boosts learning and confidence by
          providing instant feedback on knowledge assessment.
        </p>
      </div>
    </div>
  );
}
