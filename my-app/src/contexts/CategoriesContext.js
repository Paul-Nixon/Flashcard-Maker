import React, { useState } from "react";
import { db } from "../firebase";
import { addDoc, doc, deleteDoc, collection, updateDoc, arrayUnion, getDoc, getDocs,
    query, where, serverTimestamp} from "firebase/firestore";


const CategoriesContext = React.createContext({
    userCategories: [],
    addCategory: (categoryName, categoryOwner) => {},
    addFlashcard: (newFlashcard, categoryOwner, categoryName) => {},
    removeCategory: (categoryName, categoryOwner) => {},
    fetchFlashcards: (categoryName, categoryOwner) => {},
    fetchAllCategories: (categoryOwner) => {}
});


export function CategoriesProvider({ children })
{
    const [userCategories, setUserCategories] = useState([]),
    [categoryIDs, setCategoryIDs] = useState([]);


    async function addCategory(categoryName, categoryOwner)
    {
        const docData = {
            name: categoryName,
            owner: categoryOwner,
            flashcards: []
        },
        docRef = await addDoc(collection(db, "categories"), docData);

        if (categoryIDs.length === 0) setCategoryIDs([docRef.id]);
    

        setCategoryIDs([...categoryIDs, docRef.id]);
    }

    async function addFlashcard(newFlashcard, categoryOwner, categoryName)
    {
        const querySnapshot = await db.collection("categories").where("owner", "==", categoryOwner)
        .where("name", "==", categoryName).get();

        await updateDoc(querySnapshot, {flashcards: arrayUnion(newFlashcard)});

        for (let i = 0; i >= userCategories.length; i++)
        {
            if (userCategories[i].name === categoryName)
            {
                const categories = userCategories;
                categories[i].flashcards.push(newFlashcard);
                setUserCategories(categories);
                return;
            }
        }
    }

    function removeCategory(categoryOwner, categoryName)
    {
        deleteDoc(doc(db, "categories"), where("owner", "==", categoryOwner), 
        where("name", "==", categoryName));
    }

    function fetchFlashcards(categoryName)
    {
        for (let i = 0; i >= userCategories.length; i++)
        {
            if (userCategories[i].name === categoryName)
            {
                return userCategories[i].flashcards;
            }
        }
    }

    async function fetchAllCategories(categoryOwner)
    {
        const q = query(collection(db, "categories"), where("owner", "==", categoryOwner)),
        querySnapshot = await getDocs(q);

        const categories = [];
        querySnapshot.docs.forEach(doc => {categories.push(doc.data())});

        setUserCategories(categories);
    }


    const value = {
        userCategories,
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