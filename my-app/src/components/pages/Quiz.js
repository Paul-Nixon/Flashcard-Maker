import styles from './Assessment.module.css'

import { useState } from 'react'

import Question from '../ui/Question';


export default function Quiz({ questions }) {
    
    const [score, setScore] = useState(0),
    [currentQuestion, setCurrentQuestion] = useState(0);


    function answerOptionClickHandler(isCorrect)
    {
        if (isCorrect) setScore(score + 10);

        if (currentQuestion < questions.length) setCurrentQuestion(currentQuestion + 1);
    }

    function addQuizData()
    {
        // TODO: Send the quiz's data to Firebase.
    }

    
    return (
        <div className={styles.assessment}>
            <div className={styles.questionCount}>Question {currentQuestion + 1} of {questions.length}</div>
            
            <Question question={questions[currentQuestion]} />
        </div>
    )
}
