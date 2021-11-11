import React from "react";
import { db } from "../firebase";
import { addDoc, doc, deleteDoc, collection, updateDoc, arrayUnion, getDoc, getDocs,
    query, where} from "firebase/firestore";


const CategoriesContext = React.createContext({
    addCategory: (categoryName, categoryOwner) => {},
    addFlashcard: (newFlashcard, categoryOwner, categoryName) => {},
    removeCategory: (categoryName, categoryOwner) => {},
    fetchFlashcards: (categoryName, categoryOwner) => {},
    fetchAllCategories: (categoryOwner) => {}
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

        addDoc(collection(db, "categories"), docData);
    }

    function addFlashcard(newFlashcard, categoryOwner, categoryName)
    {
        const querySnapshot = fetchCategory(categoryOwner, categoryName);

        updateDoc(querySnapshot, {flashcards: arrayUnion(newFlashcard)});
    }

    function removeCategory(categoryOwner, categoryName)
    {
        deleteDoc(doc(db, "categories"), where("owner", "==", categoryOwner), 
        where("name", "==", categoryName));
    }

    function fetchCategory(categoryOwner, categoryName)
    {
        const q = query(collection(db, "categories"), where("owner", "==", categoryOwner), 
            where("name", "==", categoryName)),
        querySnapshot = getDoc(q);

        return querySnapshot;
    }

    function fetchFlashcards(categoryOwner, categoryName)
    {
        const querySnapshot = fetchCategory(categoryOwner, categoryName);

        return querySnapshot.data().flashcards;
    }

    function fetchAllCategories(categoryOwner)
    {
        const q = query(collection(db, "categories"), where("owner", "==", categoryOwner)),
        querySnapshot = getDocs(q);

        return querySnapshot.data();
    }

    const value = {
        addCategory,
        addFlashcard,
        removeCategory,
        fetchFlashcards,
        fetchAllCategories
    };

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesContext;