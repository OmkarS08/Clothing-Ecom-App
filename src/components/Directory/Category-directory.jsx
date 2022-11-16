import CategoryItem from "../category-item/Category-item";

function CategoryDirectory({category})
{
    console.log(category)
return(    
    <div className="directory-container">
    {category.map((category) => {return (<CategoryItem key={category.id} category={category}/>);})}
    </div>
    )
}

export default CategoryDirectory;