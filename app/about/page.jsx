import Image from "next/image";

export default function Contact() {

    return (
        <main>
            <div className="bg-white pt-16 sm:py-22">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-gray-400">About us</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Welcome to Reecoplast
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                Where innovation meets environmental responsibility.
                </p>
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
                                src={'/plastic-recycle-demo.png'}
                                alt={'plastic and bricks'}
                                className="w-full object-cover object-center lg:h lg:w-full"
                            />
                            </div>
                        </div>
                        <p className="mt-6 text-sm leading-8 text-gray-600">
                            We believe in the power of innovation and sustainable. Our dedicated team, led by wonderful minds, is committed to rethinking the way we use and dispose off plastic.
                        <span className="block mt-6">
                            Our pavement bricks and pellets are not just ordinary construction material - they are a testament to our unwavering commitment to environmental preservation. Every brick and pellet we produce is made from 100% recycled plastic waste, reducing the burden of landfills and minimizing the extration of natural resources.    
                        </span>    
                        </p>
                        <p className="mt-6 text-sm leading-8 text-gray-600">
                            Join us on this remarkable journey towards a cleaner, more eco-friendly future. Together, let us build a world where plastic waste becomes a valuable resource and construction is synonymous with sustainability.</p>
                    </div>
                </div>
            </div>
            </div>
        </main>
    )
}