import React from "react";
import { db } from "../firebase";
import { addDoc, doc, deleteDoc, collection, updateDoc, arrayUnion, getDoc,query, where} from "firebase/firestore";


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

    function addFlashcard(newFlashcard, categoryOwner, categoryName)
    {
        const querySnapshot = getCategory(categoryOwner, categoryName);

        await updateDoc(querySnapshot, {flashcards: arrayUnion(newFlashcard)});
    }

    function removeCategory(categoryOwner, categoryName)
    {
        await deleteDoc(doc(db, "categories"), where("owner", "==", categoryOwner), 
        where("name", "==", categoryName));
    }

    function getCategory(categoryOwner, categoryName)
    {
        const q = query(collection(db, "categories"), where("owner", "==", categoryOwner), 
            where("name", "==", categoryName)),
        querySnapshot = await getDoc(q);

        return querySnapshot;
    }

    function getFlashcards(categoryOwner, categoryName)
    {
        const querySnapshot = getCategory(categoryOwner, categoryName);

        return querySnapshot.data().flashcards;
    }

    function getAllCategories(owner)
    {
        const q = query(collection(db, "categories"), where("owner", "==", categoryOwner)),
        querySnapshot = await getDoc(q);

        return querySnapshot.data();
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