import { createContext,useState,useEffect } from "react";

import SHOP_DATA from "../Shop-data";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase.utils";

export const ProductsContext = createContext({
    products :[]
}); // setup context

export const ProductsProvider = ({children}) =>{
    const [products ,setProducts] =useState([])


    // async function in useEffect
    useEffect(()=>{
        const getCategoriesMap =async() =>{
            const CategoryMap =await getCategoriesAndDocuments();
            console.log(CategoryMap);
        }
        getCategoriesMap();
    })

//    one time use to add the data to firestore
    // useEffect(()=>{
    //     addCollectionAndDocuments('categories',SHOP_DATA)
    // },[])
    const value = {products};
    return(
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}