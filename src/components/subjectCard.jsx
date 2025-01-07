import { useState, useEffect, useRef } from "react";

export default function SubjectCard() {
  const subjects = [
    {
      id: 1,
      title: "Mathematics",
      image: "/mathematics.png",
      type: "Core",
      link: "https://academy.acemyx.com/enrol/index.php?id=31",
    },
    {
      id: 2,
      title: "English Language",
      image: "/english.png",
      type: "Core",
      link: "https://academy.acemyx.com/enrol/index.php?id=33",
    },
    {
      id: 3,
      title: "Physics",
      image: "/physics.png",
      type: "Science",
      link: "https://academy.acemyx.com/enrol/index.php?id=27",
    },
    {
      id: 4,
      title: "Chemistry",
      image: "/chemistry.png",
      type: "Science",
      link: "https://academy.acemyx.com/enrol/index.php?id=47",
    },
    {
      id: 5,
      title: "Biology",
      image: "/biology.png",
      type: "Science",
      link: "https://academy.acemyx.com/enrol/index.php?id=46",
    },
    {
      id: 6,
      title: "Literature",
      image: "/literature.png",
      type: "Arts",
      link: "https://academy.acemyx.com/enrol/index.php?id=42",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const slideInterval = useRef(null);
  const dragRef = useRef(null);
  const slidesPerView = window.innerWidth >= 768 ? 2 : 1;
  const totalSlides = Math.ceil(subjects.length / slidesPerView);

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
      } else if (movedBy < 0 && currentSlide < totalSlides - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    }
    setCurrentTranslate(0);
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval.current);
  }, []);

  return (
    <div className='relative overflow-hidden px-4 md:px-8'>
      <div
        ref={dragRef}
        className='flex transition-transform duration-500 ease-in-out'
        style={{
          transform: `translateX(calc(-${
            currentSlide * 100
          }% + ${currentTranslate}px))`,
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className='w-full md:w-1/2 flex-shrink-0 px-2 md:px-4'
          >
            <div className='group relative bg-neutral-white-40 p-6 rounded-2xl'>
              <div className='aspect-[4/2] mb-4 overflow-hidden rounded-xl'>
                <img
                  src={subject.image}
                  alt={subject.title}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='flex justify-between items-start gap-6'>
                <h3 className='text-xl font-semibold'>{subject.title}</h3>
                <a href={subject.link} target="_blank" className='p-3 bg-text-color rounded-xl text-white group-hover:translate-x-1 transition-transform'>
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

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className='hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg'
      >
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <path
            d='M15 19l-7-7 7-7'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className='hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg'
      >
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <path
            d='M9 5l7 7-7 7'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className='flex justify-center gap-2 mt-6'>
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
