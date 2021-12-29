import styles from './Assessment.module.css'

import { useState, useContext } from 'react'

import Question from '../ui/Question';
import AssessmentsContext from '../../contexts/AssessmentsContext';
import AssessmentResults from './AssessmentResults';


export default function Assessment({ questions, user, returntoCategories }) {
        
    const [score, setScore] = useState(0),
    [currentQuestion, setCurrentQuestion] = useState(0),
    [renderAssessment, setRenderAssessment] = useState(true),
    [renderResults, setRenderResults] = useState(false),
    [correctAnswers, setCorrectAnswers] = useState(0),
    assessmentsCtx = useContext(AssessmentsContext);


    function answerOptionClickHandler(isCorrect)
    {
        if (isCorrect)
        {
            const percent = (correctAnswers + 1) / questions.length;
            setScore((percent.toFixed(2) * 100).toFixed());
            setCorrectAnswers(correctAnswers + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) setCurrentQuestion(nextQuestion);
        else
        {
            addAssessmentData();
            setRenderAssessment(false);
            setRenderResults(true);
        }
    }

    async function addAssessmentData()
    {
        assessmentsCtx.addAssessment({user, score});
    }


    return (
        <div className={styles.assessment}>
            {renderAssessment && (
                <>
                    <div className={styles.questionCount}>Question {currentQuestion + 1} of {questions.length}</div>
            
                    <Question question={questions[currentQuestion]} onOptionClick={answerOptionClickHandler} />
                </>               
            )}
            {renderResults && <AssessmentResults score={score} correctAnswers={correctAnswers}
            returntoCategories={returntoCategories} />}
        </div>
    )
}
