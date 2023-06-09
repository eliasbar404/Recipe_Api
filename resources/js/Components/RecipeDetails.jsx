import React from 'react';
import { useParams ,Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch} from 'react-redux';
import { fetchRecipe } from '@/Redux/Slices/recipeSlice';
// import { useForm } from "react-hook-form";
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

import { CModal,CModalHeader,CModalTitle,CModalBody,CModalFooter,CButton} from '@coreui/react';


import Rating from '@mui/material/Rating';

const RecipeDetails = () => {
    const [reload,setReload] = React.useState(false);
    const [visible, setVisible] = React.useState(true);
    const isLoading = useSelector((state)=>state.recipe.isLoading);
    const user  = useSelector((state)=>state.auth.user);
    const status  = useSelector((state)=>state.auth.status);
    const recipe  = useSelector((state)=>state.recipe.contents);
    const dispatch = useDispatch();
    const {id} = useParams();
    React.useEffect(() => {
        dispatch(fetchRecipe(id))
    },[reload]);

    const [rating,setRating]   = React.useState(1);
    const [comment,setComment] = React.useState("");

    const onSubmit = (e) =>{
        e.preventDefault();
        const data = {
            user_id:user.id,
            recipe_id:recipe.recipe.id,
            rating:rating,
            comment:comment
        }

        axios.post('http://127.0.0.1:8000/api/recipe/review',data)
        .then(async(res)=>{
            if(res.data){
                await Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Review saved susseccfuly!',
                    showConfirmButton: false,
                    timer: 2000
                })
                setRating(0);
                setComment("");

                setReload(!reload);

            }
        })
        
    }


    
    return (
    <div>
        {
            !status &&
            <>
                <CModal visible={visible}>
                    <div className='p-10  flex flex-col gap-10'>
                        <span className='text-lgl font-extrabold'>you should be authenticate to see the recipe details</span>
                        <div className='flex flex-col gap-3 items-center'>
                            <Link to="/" className='font-black text-xl'>Back to home</Link>
                            <Link to="/login" className='font-black text-xl'>Go to login page</Link>
                        </div>

                    </div>
                </CModal>
            </>
        }
        {
            !isLoading && 
            <div>

                {/* top */}
                <div className='flex flex-row p-2 mt-10'>
                    {/* Col 1 */}
                    <div className='basis-1/2 p-10 flex flex-col items-center space-y-5'>
                        <h1 className='font-extrabold text-4xl text-center'>{recipe.recipe.title}</h1>
                        <Link to={`/profile/${recipe.user.id}`} className='text-center font-mono font-semibold text-xl'>By: {recipe.user.first_name+" "+recipe.user.last_name}</Link>
                        <h2 className='text-center'>Created At: {(recipe.recipe.created_at).slice(0,10)}</h2>
                        <button className='bg-orange-600 px-5 py-2 w-[270px] font-semibold text-slate-100 hover:bg-orange-500 rounded-sm'>SAVE RECIPE</button>
                        <span className='font-extrabold'>{`Reviews (${recipe.reviews.length})`}</span>
                        <Rating name="half-rating-read" size="large"  defaultValue={recipe.rating} precision={0.5} readOnly />
                    </div>
                    {/* Col 2 */}
                    <img className='basis-1/2 h-[500px]' src={`http://127.0.0.1:8000/uploads/${recipe.medias[0].media}`}/>
                </div>
                <hr className='mt-5 h-10 p-1'/>

                {/* Description */}
                <div className='mt-10 px-20'>
                    <h1 className='font-extrabold text-4xl'>Description:</h1>
                    <p className='text-2xl text-center mt-10'>{recipe.recipe.description}</p>
                </div>

                <hr className='mt-2'/>
                {/* Ingredients */}
                <div className='mt-10 px-20'>
                    <h1 className='font-extrabold text-4xl'>Ingredients:</h1>
                    <ul className='px-10 mt-10 space-y-2'>
                        {
                            // console.log(recipe)
                            (recipe.ingredients).map((val,key)=>(
                                <li key={key} className='text-slate-600 text-xl'>- {val.description}</li>
                            ))
                        }
                    </ul>
                </div>
                {/* Steps */}
                <div className='mt-10 px-20'>
                    <h1 className='font-extrabold text-4xl'>Steps:</h1>

                        {
                            // console.log(recipe)
                            (recipe.steps).map((val,key)=>(
                                <div className='flex flex-col mt-10 mx-10'>
                                    <span className='text-lg'>Step {val.step_number}:</span>
                                    <p className='text-2xl px-10 text-center mt-5 text-slate-600'>{val.description}</p>
                                </div>
                            ))
                        }

                </div>

                <hr className='mt-10' />
                <div>
                    <form onSubmit={onSubmit} className='flex flex-col mt-10 items-center space-y-5'>
                        {/* rating */}
                        <h1 className='text-2xl'>How would you rate {recipe.recipe.title}?</h1>
                        <Rating value={rating}    onChange={(e)=>setRating(parseInt(e.target.value))} name="no-value"  size="large"/>
                        <textarea value={comment} onChange={(e)=>setComment(e.target.value)}  name="" id="" cols="60" rows="5" placeholder='Leave a Review...' className='resize-none rounded-sm'></textarea>
                        <input type='submit' value={"Submit Rating"} className='uppercase bg-slate-900 font-bold text-slate-50 py-2 px-10 rounded-sm' />
                    </form>

                    {/* Reviews List */}

                    <div className='mx-20'>
                        <h6 className='font-extrabold text-3xl'>Reviews:</h6>
                        <div className='mt-10'>
                        {
                            (recipe.reviews).map((val,key)=>(
                                <div key={key} className='bg-slate-100 p-5 flex flex-col gap-4 mt-2'>
                                    {/* header */}
                                    <div className='flex gap-6 items-center'>
                                        <img className='w-[50px] h-[50px] rounded-full' src={`http://127.0.0.1:8000/uploads/${val.user.image}`} alt="" srcset="" />
                                        <span className='font-extrabold'>BY: {val.user.first_name+" "+val.user.last_name}</span>
                                        <span>AT: {val.review.created_at.slice(0,10)}</span>
                                    </div>
                                    {/* Rating */}
                                    <Rating value={val.review.rating}  name="no-value"  size="large" readOnly/>
                                    <p>{val.review.comment}</p>
                                </div>
                            ))
                        }
                        </div>
                    </div>


                </div>








            </div>
        }
        
    </div>
)
}

export default RecipeDetails