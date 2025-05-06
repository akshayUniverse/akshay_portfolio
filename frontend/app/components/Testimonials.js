"use client";

import { useState } from 'react';

export default function Testimonials({ id }) {
  const testimonials = [
    {
      id: 1,
      quote: "Akshay delivered our e-commerce platform ahead of schedule and exceeded all our expectations. His attention to detail and problem-solving abilities were impressive.",
      name: "Sarah Johnson",
      title: "CEO, StyleHub",
      image: "/testimonials/person1.jpg"
    },
    {
      id: 2,
      quote: "Working with Akshay was a pleasure. He quickly understood our requirements and delivered a clean, well-structured codebase that our team could easily build upon.",
      name: "Michael Chen",
      title: "CTO, TechNova Solutions",
      image: "/testimonials/person2.jpg"
    },
    {
      id: 3,
      quote: "Akshay's expertise in both frontend and backend technologies allowed us to launch our startup with a robust MVP that impressed our investors.",
      name: "Jessica Williams",
      title: "Founder, DataViz Analytics",
      image: "/testimonials/person3.jpg"
    }
  ];

  // Simple pagination state
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Get current testimonials to display (2 at a time on desktop, 1 on mobile)
  const currentTestimonials = [
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % testimonials.length]
  ];

  // Navigation functions
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id={id} className="py-24 px-4 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center text-gray-900">
          What People Say
        </h2>
        
        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {currentTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100"
            >
              {/* Quote */}
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation controls */}
        <div className="flex justify-center space-x-4">
          <button 
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 