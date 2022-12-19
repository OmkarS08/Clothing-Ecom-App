import './Category.stlyes.scss'
import { useContext, useEffect,useState } from 'react';
import { CategoriesContext } from '../../contexts/Categories.context';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard/ProductCard';
const Category =() =>{
    const {category} =useParams();
    const {categoriesMap} =useContext(CategoriesContext);

    const [products,setProducts] =useState(categoriesMap[category]);

    useEffect(()=>{
        setProducts(categoriesMap[category]);


    },[category,categoriesMap])

    return(
        <div className='category-container'>
            {
               products && products.map((product)=> <ProductCard key ={product.id} product={product}/>)
            }
        </div>
    )
}

export default Category;