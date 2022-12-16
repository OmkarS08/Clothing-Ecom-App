import './CategoryPreview.scss'
import { ProductCard } from '../ProductCard/ProductCard';

const CategoryPreview =({title ,products})=>{
return (
    <div className='category-preview-container'>
        <h2>
            <span className='title'>{title.ToUpperCase()}</span>
        </h2>
        <div className='preview'>
            {
                products
                .filter((_, idx) => idx < 4)
                .map((product) => (<ProductCard key = {product.id} product ={product}></ProductCard>))
            }
        </div>
    </div>
)
}

export default CategoryPreview;