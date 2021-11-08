import React from "react";
import { db } from "../firebase";
import { addDoc, setDoc, doc, deleteDoc, collection, updateDoc, arrayUnion, getDoc,
         query, where} from "firebase/firestore";


const CategoriesContext = React.createContext({

});


export function CategoriesProvider({ children })
{
    function addCategory(categoryName, categoryOwner)
    {
        const docData = {
            id: 1,
            name: categoryName,
            owner: categoryOwner,
            flashcards: []
        };

        await addDoc(collection(db, "categories"), docData);
    }

    function addFlashcard(newFlashcard)
    {
        
    }

    function removeCategory()
    {

    }

    const value = {

    };

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesContext;