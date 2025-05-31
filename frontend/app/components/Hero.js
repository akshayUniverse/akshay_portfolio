"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const roles = ["Full-Stack Developer", "Software Developer", "Software Engineer", "Freelancer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    if (!isDeleting && currentText === currentRole) {
      setTimeout(() => setIsDeleting(true), 1500);
      return;
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentRole.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(currentRole.substring(0, currentText.length + 1));
        setTypingSpeed(100);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentRoleIndex, isDeleting, roles]);

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center py-20 px-4">
      <div className="container mx-auto max-w-[90rem] flex flex-col md:flex-row items-center gap-24">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Hi,
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight whitespace-nowrap">
            I'm <span className="text-emerald-600 dark:text-emerald-400">AKSHAY KARADA</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-700 dark:text-gray-300 leading-tight min-h-[4rem]">
            <span className="inline-block transition-all duration-300 ease-in-out">
              <span className="text-emerald-600 dark:text-emerald-400">{currentText}</span>
              <span className="animate-blink">|</span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl pt-6">
          Full-stack developer with a builder's mindset, skilled in JavaScript, React, and cloud technologies. I turn ideas into fast, scalable, and secure web applications—crafting experiences that users love and businesses trust.


          </p>
          <div className="flex flex-wrap gap-4 pt-8">
            <Link href="/projects" className="px-8 py-4 text-lg bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors">
              View My Work
            </Link>
            <Link href="/contact" className="px-8 py-4 text-lg border border-emerald-600 text-emerald-600 dark:text-emerald-400 dark:border-emerald-400 hover:bg-emerald-600/10 rounded-lg transition-colors">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-end">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-emerald-600 dark:border-emerald-400 shadow-xl">
            <Image
              src="/projects/Profile.jpg"
              alt="Akshay Karada"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 