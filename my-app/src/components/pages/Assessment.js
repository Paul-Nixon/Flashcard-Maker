import styles from './Assessment.module.css'

import { useState, useContext } from 'react'

import Question from '../ui/Question';
import AssessmentsContext from '../../contexts/AssessmentsContext';


export default function Assessment({ questions, user, type }) {
        
    const [score, setScore] = useState(0),
    [currentQuestion, setCurrentQuestion] = useState(0),
    assessmentsCtx = useContext(AssessmentsContext);


    function answerOptionClickHandler(isCorrect)
    {
        if (isCorrect && type === "quiz") setScore(score + 10);
        else if (isCorrect && type === "test") setScore(score + 1);


        if (currentQuestion < questions.length) setCurrentQuestion(currentQuestion + 1);
        else addAssessmentData();
    }

    async function addAssessmentData()
    {
        switch (type)
        {
            case "quiz":
                assessmentsCtx.addAssessment({user, score}, type);
                break;
            case "test":
                assessmentsCtx.addAssessment({user, score: (score / questions.length).toFixed(1)}, type);
                break;
        }
    }


    return (
        <div className={styles.assessment}>
            <div className={styles.questionCount}>Question {currentQuestion + 1} of {questions.length}</div>
            
            <Question question={questions[currentQuestion]} onOptionClick={answerOptionClickHandler} />
        </div>
    )
}
