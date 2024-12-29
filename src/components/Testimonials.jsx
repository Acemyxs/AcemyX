/* eslint-disable react/prop-types */
"use client";

import { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Blessing Ngonzi",
    location: "Edo, Benin State",
    avatar: "/placeholder.svg?height=40&width=40",
    text: "As the top student in my class, I'm always looking for ways to push my limits. Acemyx was the game-changer I needed to excel beyond the classroom. The AI assistance and the depth of the question bank truly prepared me for WAEC and UTME. Acemyx is the partner every high achiever needs.",
  },
  {
    name: "Kemi Idowo",
    location: "Ilorin, Kwara State",
    avatar: "/placeholder.svg?height=40&width=40",
    text: "The personalized learning experience has been incredible. I've seen a significant improvement in my grades since I started using the platform.",
  },
  {
    name: "Alausa Ramadan",
    location: "Lekki, Lagos State",
    avatar: "/placeholder.svg?height=40&width=40",
    text: "What sets this platform apart is how it adapts to my learning pace. The practice questions are challenging yet achievable.",
  },
  {
    name: "Shola Adedimeji",
    location: "Lagos, Lagos State",
    avatar: "/placeholder.svg?height=40&width=40",
    text: "I appreciate how the platform breaks down complex topics into manageable chunks. It's made my exam preparation much more effective.",
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // const handleSlide = (index) => {
  //   setCurrentSlide(index);
  // };

  useEffect(() => {
    // Auto-slide every 5 seconds
    slideInterval.current = setInterval(nextSlide, 5000);

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  return (
    <section className='relative' id='testimonial'>
      <div className='overflow-hidden'>
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
      <div className='flex justify-end gap-6'>
        <ButtonPrev onClick={prevSlide} currentSlide={currentSlide} />
        <ButtonNext onClick={nextSlide} currentSlide={currentSlide} />
      </div>
    </section>
  );
}

function ButtonPrev({ onClick, currentSlide }) {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent ${
        currentSlide === 0 ? "text-gray-400" : "text-current"
      }`}
    >
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M15 19l-7-7 7-7'
        />
      </svg>
    </button>
  );
}

function ButtonNext({ onClick, currentSlide }) {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent ${
        currentSlide === testimonials.length - 1
          ? "text-gray-400"
          : "text-current"
      }`}
    >
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 5l7 7-7 7'
        />
      </svg>
    </button>
  );
}

export function DotsIndicator({ handleSlide, currentSlide }) {
  return (
    <div className='flex justify-center gap-2 mt-6'>
      {testimonials.map((_, index) => (
        <button
          key={index}
          onClick={() => handleSlide(index)}
          className={`w-2 h-2 rounded-full transition-colors ${
            currentSlide === index ? "bg-gray-800" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
