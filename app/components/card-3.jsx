'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


const products = [
  {
    id: 1,
    description: 'We seek partnerships with organizations, suppliers and construction industry stakeholders who share our sustainability vision, aiming to make a positive environmental impact together',
    href: '#',
    title: 'Strategic Partnership',
    svg: '/handshake.jpeg',
  },
  {
    id: 2,
    description: "From environmental NGOs to research institutions and industry associations, we work together to advance sustainable solutions in the construction sector, fostering synergies for a greener future.",
    href: '#',
    title: 'Synergistic Collaborations',
    svg: '/sustainability.png',
  },
  {
    id: 3,
    description: 'Collaborating with industry experts and construction consultants, we ensure our products meet high standards and address evolving needs, delivering quality solutions for the construction industry.',
    href: '#',
    title: 'Expert Consultancy',
    svg: '/expert-collabo.webp',
  },
];

export default function CardB() {
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-18 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <Link href={product.href} key={product.id}>
              <div
                className={`group flex flex-col gap-y-4 bg-white p-6 drop-shadow-xl relative ${
                  hoveredProductId === product.id ? 'text-green-400' : ''
                }`}
                onMouseEnter={() => handleMouseEnter(product.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div>
                  <Image
                    width={1500}
                    height={1500}
                    src={product.svg}
                    alt={product.title}
                    className="h-full w-[75px] object-cover object-center lg:h-full lg:w-[100px]"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-black">{product.title}</h2>
                </div>
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.description}
                  </h3>
                </div>
                {/* <div className='flex items-center gap-4'>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {'Learn more'}
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </div> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
