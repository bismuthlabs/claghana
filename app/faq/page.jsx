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
            q: "What is the admissions process like at Christian Life Academy?",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend felis nec quam consequat, in consectetur magna dictum. Ut nec sapien vel sem tincidunt posuere. Phasellus vestibulum justo id efficitur lobortis. Quisque euismod leo id odio ultricies, ac vulputate nulla fringilla."
        },
        {
            id: 2,
            q: "What is the tuition cost and are there any financial aid options available?",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend felis nec quam consequat, in consectetur magna dictum. Ut nec sapien vel sem tincidunt posuere. Phasellus vestibulum justo id efficitur lobortis. Quisque euismod leo id odio ultricies, ac vulputate nulla fringilla."
        },
        {
            id: 3,
            q: "What is the curriculum like at Christian Life Academy?",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend felis nec quam consequat, in consectetur magna dictum. Ut nec sapien vel sem tincidunt posuere. Phasellus vestibulum justo id efficitur lobortis. Quisque euismod leo id odio ultricies, ac vulputate nulla fringilla."
        },
        {
            id: 4,
            q: " What extracurricular activities are available for students?",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend felis nec quam consequat, in consectetur magna dictum. Ut nec sapien vel sem tincidunt posuere. Phasellus vestibulum justo id efficitur lobortis. Quisque euismod leo id odio ultricies, ac vulputate nulla fringilla."
        },
    ]
  
    return (
        <section className="leading-relaxed max-w-screen-xl mt-24 mx-auto px-4 md:px-8">
            <div className="bg-white sm:py-22">
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Frequently asked questions</h2>
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