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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1.7fr_1.5fr] gap-8">
      {tests.map((test) => (
        <div
          key={test.id}
          className="group relative bg-slate-200 p-6 rounded-2xl"
        >
          <div className="aspect-[4/2] mb-4 overflow-hidden rounded-xl">
            <img
              src={test.image}
              alt="Laptop and study materials"
              className="w-full h-full"
            />
          </div>
          <div className="flex justify-between items-start gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">{test.title}</h3>
              <p className="text-gray-700 text-sm">{test.description}</p>
            </div>
            <button className="p-3 bg-black rounded-xl text-white group-hover:translate-x-1 transition-transform">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="-rotate-45"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      ))}
      {/* JAMB Practice Test */}
    </div>
  );
}
