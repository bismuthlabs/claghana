'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { SiMicrosoftacademic } from "react-icons/si";
import { LiaCrossSolid } from "react-icons/lia";
import { TbPlayFootball } from "react-icons/tb";
import { IoPeopleSharp } from "react-icons/io5";


const products = [
  {
    id: 1,
    description: 'Our curriculum is designed to engage students intellectually, encourage critical thinking, and foster a lifelong love for learning.',
    href: '#',
    title: 'Academics',
    svg: <SiMicrosoftacademic />,
  },
  {
    id: 2,
    description: 'We encourage students to grow in their faith and live out the values of love, compassion, and integrity in all areas of their lives.',
    href: '#',
    title: 'Spiritual development',
    svg: <LiaCrossSolid />,
  },
  {
    id: 2,
    description: 'From sports teams to fine arts programs, there are opportunities for students to explore their interests, develop their talents, and build friendships that will last a lifetime.',
    href: '#',
    title: 'Extracurricular activities',
    svg: <TbPlayFootball />,
  },
  {
    id: 2,
    description: 'Through outreach initiatives, mission trips, and partnerships with local organizations, we encourage students to put their faith into action and be a light in their communities.',
    title: 'Community Involvement',
    href: '#',
    svg: <IoPeopleSharp />,
  },
  // More products...
];

export default function Card() {
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-18 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          {products.map((product) => (
            <Link href={product.href} key={product.id}>
              <div
                className={`flex flex-col gap-y-4 bg-white p-6 drop-shadow-xl relative md:hover:bg-green-500`}
                onMouseEnter={() => handleMouseEnter(product.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div>
                  <span className='text-6xl'>

                  {product.svg}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold capitalize text-black">{product.title}</h2>
                </div>
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.description}
                  </h3>
                </div>
                <div className='flex items-center gap-4'>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {'Learn more'}
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
