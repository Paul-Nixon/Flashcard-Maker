import React from "react";
import { db } from "../firebase";
import { addDoc, collection, getDocs, query, where, serverTimestamp} from "firebase/firestore";


const AssessmentsContext = React.createContext({
    addAssessment: (assessmentData) => {},
    getNumOfTestsPassed: (user) => {}
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

    async function getNumOfTestsPassed(user)
    {
        const q = query(collection(db, "tests"), where("user", "==", user)),
        querySnapshot = await getDocs(q),
        assessments = [];

        querySnapshot.docs.forEach(doc => {assessments.push({id: doc.id, data: doc.data()})});

        return assessments.length;
    }

    const value = {
        addAssessment,
        getNumOfTestsPassed
    };

    return (
        <AssessmentsContext.Provider value={value}>
            {children}
        </AssessmentsContext.Provider>
    )
}

export default AssessmentsContext;