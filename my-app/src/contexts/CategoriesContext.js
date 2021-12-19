import React, { useState } from "react";
import { db } from "../firebase";
import { addDoc, doc, collection, updateDoc, arrayUnion, getDocs, query, where} from "firebase/firestore";


const CategoriesContext = React.createContext({
    userCategories: [],
    addCategory: (categoryName, categoryOwner) => {},
    addFlashcard: (flashcardData, categoryID) => {},
    removeCategory: (categoryName, categoryOwner) => {},
    fetchFlashcards: (categoryName, categoryOwner) => {},
    fetchAllCategories: (categoryOwner) => {}
});


export function CategoriesProvider({ children })
{
    const [userCategories, setUserCategories] = useState([]);


    async function addCategory(categoryName, categoryOwner)
    {
        const docData = {
            name: categoryName,
            owner: categoryOwner,
            flashcards: []
        },
        docRef = await addDoc(collection(db, "categories"), docData);

        if (userCategories.length === 0) setUserCategories([{id: docRef.id, data: docData}]);
        else setUserCategories([...userCategories, {id: docRef.id, data: docData}]);
    }

    async function addFlashcard(flashcardData, categoryID)
    {
        const newFlashcard = 
        {
            question: flashcardData.question,
            options: flashcardData.options,
            id: Date.now()
        },
        docRef = doc(db, "categories", categoryID),
        categories = userCategories,
        categoryIndex = userCategories.findIndex(category => category["id"] === categoryID),
        updatedCategory = categories.splice(categoryIndex, 1);

        await updateDoc(docRef, {flashcards: arrayUnion(newFlashcard)});
        updatedCategory.map(category => category["data"].flashcards.push(newFlashcard));

        setUserCategories(categories.concat(updatedCategory));
    }

    async function removeCategory(categoryID)
    {
        await db.collection("categories").doc(categoryID).delete();
        setUserCategories(userCategories.filter(category => category["id"] !== categoryID));
    }

    function fetchFlashcards(categoryID)
    {
        const categories = userCategories,
        categoryIndex = userCategories.findIndex(category => category.id === categoryID),
        category = categories.splice(categoryIndex, 1);
        setUserCategories(categories.concat(category));

        return category[0].data.flashcards;
    }

    async function fetchAllCategories(categoryOwner)
    {
        const q = query(collection(db, "categories"), where("owner", "==", categoryOwner)),
        querySnapshot = await getDocs(q);

        const categories = [];
        querySnapshot.docs.forEach(doc => {categories.push({id: doc.id, data: doc.data()})});

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