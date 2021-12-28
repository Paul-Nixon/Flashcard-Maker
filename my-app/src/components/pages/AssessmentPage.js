import styles from './AssessmentPage.module.css';


import useEffectOnce from "../custom_hooks/useEffectOnce";
import { AssessmentsProvider } from '../../contexts/AssessmentsContext';
import Assessment from './Assessment';


export default function AssessmentPage({ flashcards, type, user, returntoCategories }) {
    
    useEffectOnce(() => {
        if (type === "quiz" && flashcards.length > 10)
        {
            randomizeQuizQuestions();
            randomizeQuestions();
        }
        else randomizeQuestions();
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

    function randomizeQuizQuestions()
    {
        const tempArray = [];
        let length = 10;

        while (length !== 0)
        {
            const j = Math.floor(Math.random() * flashcards.length);
            tempArray.push(flashcards.splice(j, 1));
            --length;
        }

        flashcards = tempArray;
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
                <Assessment questions={flashcards} user={user} type={type} returntoCategories={returntoCategories} />
            </AssessmentsProvider>
        </div>
    )
}
