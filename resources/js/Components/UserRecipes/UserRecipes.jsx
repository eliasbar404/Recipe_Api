import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../RecipeCard';
// import RecipeCard from '../RecipeCard';
import { fetchCreator } from '@/Redux/Slices/creatorSlice';
import { useDispatch,useSelector } from 'react-redux';
const UserRecipes = () => {
    const dispatch = useDispatch();
    const id = useSelector((state)=>state.auth.user.id);
    const recipes = useSelector((state)=>state.creator.contents.recipes)
    const isLoading = useSelector((state)=>state.creator.isLoading)
    
    React.useEffect(() => {
        dispatch(fetchCreator(id));
    }, []);


    
    return (
    <div>
        <h1 className='w-[1200px] m-auto mt-5 text-6xl font-mono'>MY Recipes:</h1>
        <Link to="/user/recipe/create" className='flex justify-center mt-5 text-3xl'>Add Recipe</Link>



        {/* -----recipe List ----*/}
        {
            !isLoading && 
            <div className='w-[1200px] m-auto grid grid-cols-3 gap-5 p-5'>

            {
                recipes.map((data,key)=>(<RecipeCard key={key} data={data}/>))
            } 

            </div>
        }
        {/* ------------------- */}

        
    </div>
)
}

export default UserRecipes