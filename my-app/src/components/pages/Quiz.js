import styles from './Assessment.module.css'

import { useState, useContext } from 'react'

import Question from '../ui/Question';
import AssessmentsContext from '../../contexts/AssessmentsContext';


export default function Quiz({ questions, user }) {
    
    const [score, setScore] = useState(0),
    [currentQuestion, setCurrentQuestion] = useState(0),
    AssessmentsCtx = useContext(AssessmentsContext);


    function answerOptionClickHandler(isCorrect)
    {
        if (isCorrect) setScore(score + 10);

        if (currentQuestion < questions.length) setCurrentQuestion(currentQuestion + 1);
        else addQuizData();
    }

    function addQuizData()
    {
        const quizData =
        {
            user,
            score
        }
    }

    
    return (
        <div className={styles.assessment}>
            <div className={styles.questionCount}>Question {currentQuestion + 1} of {questions.length}</div>
            
            <Question question={questions[currentQuestion]} onOptionClick={answerOptionClickHandler} />
        </div>
    )
}
