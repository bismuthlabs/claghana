'use client'

import { useRef, useState } from "react"

const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-2 flex items-center justify-between text-base text-gray-700 font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-500 text-sm">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function Faq() {

    const faqsList = [
        {
            id: 1,
            q: "What are the benefit of using Reecoplast's pavement bricks and pellets?",
            a: "Our pavement bricks and pellets are made from 100% recycled plastic waste, offering a sustainable alternative to traditional construction materials. They are durable, waterproof, and exceed industry standards in compressive strength, ensureing high-quality and long-lasting structures."
        },
        {
            id: 2,
            q: "How does choosing Reecoplast's products contribute to sustainability?",
            a: "By choosing our products, you actively contribute to reducing plastic waste and promoting environmental preservation. Each brick and pellet you use is a step towards a greener future, supporting the reduction of landfill burden and minimizing the extraction of natural resources."
        },
        {
            id: 3,
            q: "How does Reecoplast ensure transparency and customer satisfaction?",
            a: "As a socially responsible company, we prioritize transparency, quality, and customer satisfaction. We maintain open communication, provide detailed information about our products and processes, and strive to exceed expectations. Our commitment to excellence extends to building meaningful partnerships with construction companies, plastic manufacturers, and packaging companies that share our vision."
        },
        {
            id: 4,
            q: "How can I get involved or collaborate with Reecoplast?",
            a: "We welcome collaboration and partnerships from organizations and individuals who share our passion for sustainability. Explore our website to learn more about our products, successful projects, and connect with us to explore collaboration opportunities. Together, let's build a world where plastic waste becomes a valuable resource and construction is sysnonymous with sustainability."
        },
    ]
  
    return (
        <section className="leading-relaxed max-w-screen-xl mt-24 mx-auto px-4 md:px-8">
            <div className="bg-white sm:py-22">
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-gray-400">Frequently Asked Questions</h2>
                    </div>
                </div>
            </div>
            <div className="max-w-2xl mx-auto">
                {
                    faqsList.map((item) => (
                        <FaqsCard
                            key={item.id}
                            idx={item.id}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}