import styles from './Assessment.module.css'

import { useState } from 'react'

import Carousel from '../layout/Carousel';


export default function Quiz({ questions, type }) {
    
    const [score, setScore] = useState(0);


    function answerOptionClickHandler(isCorrect)
    {
        // TODO: Handle what happens when the user clicks an answer.
    }

    function addQuizData()
    {
        // TODO: Send the quiz's data to Firebase.
    }

    
    return (
        <div className={styles.assessment}>
            <Carousel flashcards={questions} />
        </div>
    )
}
