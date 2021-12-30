import React from "react";
import { db } from "../firebase";
import { addDoc, collection, getDocs, query, where, serverTimestamp} from "firebase/firestore";


const AssessmentsContext = React.createContext({
    addAssessment: (assessmentData) => {},
    fetchAssessmentData: (user) => {}
});


export function AssessmentsProvider({ children })
{
    async function addAssessment(assessmentData)
    {
        await addDoc(collection(db, "tests"), {
            user: assessmentData.user,
            score: assessmentData.score,
            category: assessmentData.category,
            takenAt: serverTimestamp()
        });
    }

    async function fetchAssessmentData(user)
    {
        const q = query(collection(db, "tests"), where("user", "==", user)),
        querySnapshot = await getDocs(q),
        assessments = [];

        querySnapshot.docs.forEach(doc => {assessments.push({id: doc.id, data: doc.data()})});

        return [assessments[assessments.length - 1], assessments[assessments.length - 2],
        assessments[assessments.length - 3]];
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