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
        "The supportive environment, dedicated teachers, and emphasis on spiritual growth have made all the difference. I've seen my child's confidence soar, their love for learning deepen, and their faith become a guiding light in their life. ",
    },
    {
      id: 2,
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela Stian",
      title: "EcoTech Constructors",
      quote:
        "Sending my children to Christian Life Academy was one of the best decisions I've ever made. My children have thrived academically, but more importantly, they've developed a strong foundation of faith and character that will serve them well for a lifetime.",
    },
    {
      id: 3,
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim Ahmed",
      title: "EcoConstruct Builders",
      quote:
        "Christian Life Academy isn't just a school—it's a second home for my child. From the moment we stepped through the doors, we felt welcomed and embraced by the warm and caring community. ",
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
