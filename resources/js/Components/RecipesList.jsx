import React from 'react';
import { fetchRecipes } from '@/Redux/Slices/recipesSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import RecipeCard from './RecipeCard';



const RecipesList = () => {
    const recipes = useSelector((state)=>state.recipes.contents);

    const search = useSelector((state)=>state.search)

    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchRecipes())
        }, [search.on]);

    return (

    <div className='bg-slate-100 w-[1200px] mx-auto p-5 relative rounded-sm grid grid-cols-3 gap-2'>
        {
        recipes.map((data,key)=>{
            // return (<RecipeCard key={key} data={data}/>)
            if(search.on == true){
                //---------- search by Rating -------------
                // ----------------------------------------
                // if(data.rating == search.rating){
                //     return (<RecipeCard key={key} data={data}/>)
                // }

                //------------ search by title --------------
                // ------------------------------------------
                if(data.recipe.title.includes(search.title ) && data.recipe.category_id === search.category){
                    return (<RecipeCard key={key} data={data}/>)
                }

                //------------ Search by Category --------------
                // ---------------------------------------------
                // if(data.recipe.category_id === search.category){
                //     return (<RecipeCard key={key} data={data}/>)
                // }

                // if(search.title){
                //     if(data.recipe.title.includes(search.title )){
                //         return (<RecipeCard key={key} data={data}/>)
                //     }
                // }

            }
            else{
                return (<RecipeCard key={key} data={data}/>)
            }
            
            
        })
        }
    </div>
)
}

export default RecipesList