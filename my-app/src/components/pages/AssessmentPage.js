import styles from './AssessmentPage.module.css';


import useEffectOnce from "../custom_hooks/useEffectOnce";
import { AssessmentsProvider } from '../../contexts/AssessmentsContext';
import Assessment from './Assessment';


export default function AssessmentPage({ flashcards, user, category, returntoCategories }) {
    
    useEffectOnce(() => {
        randomizeQuestions();
        flashcards.forEach(flashcard => randomizeOptions(flashcard.options));
    });


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

    function randomizeOptions(options)
    {
        for (let i = options.length - 1; i > 0; i--)
        {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = options[i];
            options[i] = options[j];
            options[j] = temp;
        }
    }


    return (
        <div className={styles.assessmentPage}>
            <AssessmentsProvider>
                <Assessment questions={flashcards} user={user} category={category}
                returntoCategories={returntoCategories} />
            </AssessmentsProvider>
        </div>
    )
}
