import DirectoryItem from "../Directory-Item/Directory-item";
import './Category-directory.scss'
function CategoryDirectory({category})
{
    console.log(category)
return(    
    <div className="directory-container">
    {category.map((category) => {return (<DirectoryItem key={category.id} category={category}/>);})}
    </div>
    )
}

export default CategoryDirectory;