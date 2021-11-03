import './Flashcard.css';

import { useState } from "react";


export default function Flashcard({ flashcard }) {
    
    const [flip, setFlip] = useState(false);
    
    return (
        <div className="flashcard" onClick={() => setFlip(!flip)}>
            <div className="flashcardFront">
                {flashcard.question}
                <div className="flashcardOptions">
                    {flashcard.options.map(option => {
                        return <div className="FlashcardOption">{option}</div>
                    })}
                </div>
            </div>

            <div className="flashcardFront">{flashcard.answer}</div>
        </div>
    )
}
