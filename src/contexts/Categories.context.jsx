import { createContext,useState,useEffect } from "react";

import SHOP_DATA from "../Shop-data";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase.utils";

export const CategoriesContext = createContext({
    products :[]
}); // setup context

export const CategoriesProvider = ({children}) =>{
    const [categoriesMap ,setCategoriesMap] =useState({});


    // async function in useEffect
    useEffect(()=>{
        const getCategoriesMap =async() =>{
            const CategoryMap =await getCategoriesAndDocuments();
            console.log(CategoryMap);
            setCategoriesMap(CategoryMap);
        }
        getCategoriesMap();
    })

    const value = {categoriesMap};
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}




//    one time use to add the data to firestore
    // useEffect(()=>{
    //     addCollectionAndDocuments('categories',SHOP_DATA)
    // },[])