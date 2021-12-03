import './Flashcard.css';

import { useState, useEffect, useRef } from "react";


export default function Flashcard({ flashcard }) {
    
    const [flip, setFlip] = useState(false),
    [height, setHeight] = useState("initial"),
    frontSide = useRef(),
    backSide = useRef();

    function setMaxHeight()
    {
        const frontHeight = frontSide.current.getBoundingClientRect().height
        const backHeight = backSide.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, backHeight, 100))
    }

    useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options])
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight)
    }, [])


    return (
        <div className={`flashcard ${flip ? "flip" : ""}`} onClick={() => setFlip(!flip)} style={{height: height}}>
            <div className="front" ref={frontSide}>
                {flashcard.question}
                <div className="flashcard-options">
                    {flashcard.options.map(option => {
                        return <div className="flashcard-option">{option}</div>
                    })}
                </div>
            </div>

            <div className="back" ref={backSide}>{flashcard.answer}</div>
        </div>
    )
}
