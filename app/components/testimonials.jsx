'use client';

import { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      id: 1,
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Sarah M",
      title: "GreenTech Solutions",
      quote:
        "Impressed by the performance of recycled plastic pavement bricks. Smooth roads, reduced plastic waste, and a win for sustainability and aesthetics!",
    },
    {
      id: 2,
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela Stian",
      title: "EcoTech Constructors",
      quote:
        "Game-changer for our warehouse! Sturdy waste plastic pellets streamline logistics, reduce carbon footprint. A win-win solution for efficiency and sustainability.",
    },
    {
      id: 3,
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim Ahmed",
      title: "EcoConstruct Builders",
      quote:
        "Skeptical at first, but amazed by recycled plastic pavement bricks. Easy installation, visual appeal, and low maintenance compared to traditional materials.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevTestimonial) => {
        // Calculate the index of the next testimonial
        const nextTestimonial =
          (prevTestimonial + 1) % testimonials.length;
        return nextTestimonial;
      });
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [testimonials.length]);

  return (
    <section className="py-14 h-[430px]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-gray-400 font-semibold pb-6">
            What people are saying
          </h3>
          <ul>
            {testimonials.map((item, idx) => (
              currentTestimonial === idx && (
                <li key={idx} 
                className={`${
                    currentTestimonial === idx ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-500`}
                >
                  <figure>
                    <blockquote>
                      <p className="text-gray-800 text-lg sm:text-xl">
                        “{item.quote}“
                      </p>
                    </blockquote>
                    {/* <div className="mt-6">
                      <div className="mt-3">
                        <span className="block text-gray-600 text-sm mt-0.5">
                          {item.title}
                        </span>
                      </div>
                    </div> */}
                  </figure>
                </li>
              )
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <ul className="flex gap-x-3 justify-center">
            {testimonials.map((item, idx) => (
              <li key={item.id}>
                <button
                  className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-black focus:ring ${
                    currentTestimonial === idx ? "bg-black" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(idx)}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
