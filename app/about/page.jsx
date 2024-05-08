import Image from "next/image";

export default function Contact() {

    return (
        <main>
            <div className="bg-white pt-16 sm:py-22">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        About us
                    </h3>
                </div>
                <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-18 lg:max-w-7xl lg:px-8">
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
                        <div
                            className={`group flex flex-col gap-y-4 bg-white p-6 relative`}
                        >
                            <div>
                            <Image
                                width={1500}
                                height={1500}
                                src={'/placeholder-image.jpeg'}
                                alt={'plastic and bricks'}
                                className="w-full object-cover object-center lg:h lg:w-full"
                            />
                            </div>
                        </div>
                        <p className="mt-6 text-sm leading-8 text-gray-600">
                        Christian Life Academy is established to provide a conducive learning atmosphere for kids, provide the best learning materials, and quality teachers. Our school is committed to creating an environment where students feel safe, supported, and inspired to excel academically and spiritually.  
                        <span className="block mt-6">
                        With a focus on academic excellence, character development, and spiritual formation, we strive to equip students with the knowledge, skills, and values they need to thrive in today's world and make a positive impact in their communities.   
                        </span>    
                        </p>
                        <p className="mt-6 text-sm leading-8 text-gray-600">
                        Through innovative teaching methods, engaging curriculum, and a Christ-centered approach to education, we aim to empower students to reach their full potential and become leaders of tomorrow.</p>
                    </div>
                </div>
            </div>
            </div>
        </main>
    )
}