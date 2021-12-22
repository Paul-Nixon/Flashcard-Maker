import React from "react";
import { db } from "../firebase";
import { addDoc, doc, collection, updateDoc, arrayUnion, getDocs, query, where} from "firebase/firestore";


const AssessmentsContext = React.createContext({});


export function AssessmentsProvider({ children })
{
    


    const value = {};

    return (
        <AssessmentsContext.Provider value={value}>
            {children}
        </AssessmentsContext.Provider>
    )
}

export default AssessmentsContext;