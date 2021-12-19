import './Flashcard.css';

import { useState, useEffect, useRef } from "react";

import useEffectOnce from "../custom_hooks/useEffectOnce";


export default function Flashcard({ flashcard }) {
    
    const [flip, setFlip] = useState(false),
    [height, setHeight] = useState('initial'),
    answer = flashcard.options[0].answerText,
    frontSide = useRef(),
    backSide = useRef();


    function randomizeOptions()
    {
        for (let i = flashcard.options.length - 1; i > 0; i--)
        {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = flashcard.options[i];
            flashcard.options[i] = flashcard.options[j];
            flashcard.options[j] = temp;
        }
    }

    function setMaxHeight()
    {
        const frontHeight = frontSide.current.getBoundingClientRect().height,
        backHeight = backSide.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, backHeight, 100))
    }


    useEffect(setMaxHeight, [flashcard.question, flashcard.options]);
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight)
    }, []);
    useEffectOnce(() => randomizeOptions());


    return (
        <div className={`flashcard ${flip ? "flip" : ""}`} onClick={() => setFlip(!flip)} style={{height: height}}>
            <div className="front" ref={frontSide}>
                <p className="flashcard-question">{flashcard.question}</p>
                <div className="flashcard-options">
                    {flashcard.options.map(answerOption => {
                        return <div className="flashcard-option">{answerOption.answerText}</div>
                    })}
                </div>
            </div>

            <div className="back" ref={backSide}>{answer}</div>
        </div>
    )
}
