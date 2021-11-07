import React, { useEffect } from "react";
import { firestore } from "../firebase";

const CategoriesContext = React.createContext({

});


export function CategoriesProvider({ children })
{
    function addCategory()
    {

    }

    function addFlashcard()
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