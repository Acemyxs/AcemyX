import { useState, useEffect, useRef } from "react";

export default function ExamCard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const slideInterval = useRef(null);
  const dragRef = useRef(null);
  const isMobile = window.innerWidth < 768;

  const tests = [
    {
      id: 1,
      title: "JAMB Practice Test",
      description:
        "Ace your JAMB exam with our comprehensive practice questions to boost your confidence!",
      image: "/image23.png",
      link: "https://academy.acemyx.com/enrol/index.php?id=31",
    },
    {
      id: 2,
      title: "WAEC Practice Test",
      description:
        "Assist students in getting ready for the West African examinations by providing practice questions and tracking their performance.",
      image: "/image19.png",
      link: "https://academy.acemyx.com/enrol/index.php?id=46",
    },
    // {
    //   id: 3,
    //   title: "Quiz Test",
    //   description:
    //     "The Quiz Test is a fun tool that boosts learning and confidence by providing instant feedback on knowledge assessment.",
    //   image: "/image23.png",
    // },
  ];
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartPos(e.touches ? e.touches[0].clientX : e.clientX);
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentPosition = e.touches ? e.touches[0].clientX : e.clientX;
    const diff = currentPosition - startPos;
    setCurrentTranslate(diff);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate;

    if (Math.abs(movedBy) > 100) {
      if (movedBy > 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      } else if (movedBy < 0 && currentSlide < tests.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    }
    setCurrentTranslate(0);

    // Restart interval
    if (isMobile) {
      slideInterval.current = setInterval(nextSlide, 5000);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % tests.length);
  };

  useEffect(() => {
    if (isMobile) {
      slideInterval.current = setInterval(nextSlide, 5000);
      return () => clearInterval(slideInterval.current);
    }
  }, []);

  return (
    <div className='relative'>
      <div
        ref={dragRef}
        className={`${
          isMobile
            ? "flex overflow-hidden"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1.5fr] gap-8"
        }`}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        {tests.map((test) => (
          <div
            key={test.id}
            className={`${
              isMobile
                ? "w-full flex-shrink-0 transition-transform duration-500"
                : ""
            }`}
            style={
              isMobile
                ? {
                    transform: `translateX(calc(-${
                      currentSlide * 100
                    }% + ${currentTranslate}px))`,
                    cursor: isDragging ? "grabbing" : "grab",
                  }
                : {}
            }
          >
            <div className='group relative bg-neutral-white-40 p-6 md:p-10 rounded-2xl mx-2'>
              <div className='aspect-[4/2] mb-4 overflow-hidden rounded-xl'>
                <img
                  src={test.image}
                  alt={test.title}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='flex justify-between items-start gap-6'>
                <div>
                  <h3 className='text-xl font-semibold mb-2'>{test.title}</h3>
                </div>
                <a href={test.link} target="_blank" className='p-3 bg-text-color rounded-xl text-white group-hover:translate-x-1 transition-transform'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='-rotate-45'
                  >
                    <line x1='5' y1='12' x2='19' y2='12'></line>
                    <polyline points='12 5 19 12 12 19'></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isMobile && (
        <div className='flex justify-center gap-2 mt-6'>
          {tests.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
