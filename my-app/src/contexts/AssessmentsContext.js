import React from "react";
import { db } from "../firebase";
import { addDoc, collection, getDocs, query, where, serverTimestamp} from "firebase/firestore";


const AssessmentsContext = React.createContext({
    addAssessment: (type, assessmentData) => {},
    fetchAssessmentData: (type, user) => {}
});


export function AssessmentsProvider({ children })
{
    async function addAssessment(type, assessmentData)
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
                break;
        }
    }

    async function fetchAssessmentData(type, user)
    {
        let q, querySnapshot, assessments;

        switch (type)
        {
            case "quiz":
                q = query(collection(db, "quizzes"), where("user", "==", user));
                querySnapshot = await getDocs(q);
                assessments = [];

                querySnapshot.docs.forEach(doc => {assessments.push({id: doc.id, data: doc.data()})});
                break;
            case "test":
                q = query(collection(db, "tests"), where("user", "==", user));
                querySnapshot = await getDocs(q);
                assessments = [];

                querySnapshot.docs.forEach(doc => {assessments.push({id: doc.id, data: doc.data()})});
                break;
        }

        return assessments;
    }

    const value = {
        addAssessment,
        fetchAssessmentData
    };

    return (
        <AssessmentsContext.Provider value={value}>
            {children}
        </AssessmentsContext.Provider>
    )
}

export default AssessmentsContext;