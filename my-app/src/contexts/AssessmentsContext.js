import React from "react";
import { db } from "../firebase";
import { addDoc, doc, collection, getDocs, query, where, serverTimestamp} from "firebase/firestore";


const AssessmentsContext = React.createContext({
    addAssessment: (assessmentData, type) => {},
    fetchQuizData: () => {},
    fetchTestData: () => {}
});


export function AssessmentsProvider({ children })
{
    async function addAssessment(assessmentData, type)
    {
        switch (type)
        {
            case "quiz":
                await addDoc(collection(db, "quizzes"), {
                    user: assessmentData.user,
                    score: assessmentData.score,
                    takenAt: serverTimestamp()
                });
                break;
            case "test":
                await addDoc(collection(db, "tests"), {
                    user: assessmentData.user,
                    score: assessmentData.score,
                    takenAt: serverTimestamp()
                });
        }
    }

    async function fetchQuizData()
    {
        // TODO: Get the user's quiz data from Firebase.
    }

    async function fetchTestData()
    {
        // TODO: Get the user's test data from Firebase.
    }


    const value = {
        addAssessment,
        fetchQuizData,
        fetchTestData
    };

    return (
        <AssessmentsContext.Provider value={value}>
            {children}
        </AssessmentsContext.Provider>
    )
}

export default AssessmentsContext;