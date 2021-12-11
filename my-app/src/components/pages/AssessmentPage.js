import styles from './AssessmentPage.module.css';

import { useState } from 'react';

import Quiz from "./Quiz";
import Test from "./Test";
import useEffectOnce from "../custom_hooks/useEffectOnce";


export default function AssessmentPage({ flashcards, assessmentType }) {
    
    const [questions, setQuestions] = useState(randomizeQuestions());

    function randomizeQuestions()
    {
        
    }


    return (
        <div className={styles.assessmentPage}>
            {assessmentType === "quiz" ? <Quiz questions={questions} /> : <Test questions={questions} />}
        </div>
    )
}
