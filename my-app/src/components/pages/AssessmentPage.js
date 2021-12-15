import styles from './AssessmentPage.module.css';


import Quiz from "./Quiz";
import Test from "./Test";
import useEffectOnce from "../custom_hooks/useEffectOnce";


export default function AssessmentPage({ flashcards, type }) {
    
    useEffectOnce(() => randomizeQuestions());


    function randomizeQuestions()
    {
        for (let i = flashcards.length - 1; i > 0; i--)
        {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = flashcards[i];
            flashcards[i] = flashcards[j];
            flashcards[j] = temp;
        }
    }


    return (
        <div className={styles.assessmentPage}>
            {type === "quiz" && <Quiz questions={flashcards} />}
            {type === "test" && <Test questions={flashcards} />}
        </div>
    )
}
