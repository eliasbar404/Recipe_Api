import axios from 'axios';
import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Link} from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { fetchFavourites } from '@/Redux/Slices/favouriteSlice';
import { useDispatch } from 'react-redux';
import { remove } from '@/Redux/Slices/favouriteSlice';


const Favourite = () => {
    const dispatch = useDispatch();
    const user_id  = useSelector((state)=>state.auth.user.id);
    const recipes  = useSelector((state)=>state.favourites.contents);
    
    React.useEffect(() => {
        // axios.get('http://127.0.0.1:8000/api/fav/'+user_id).then((res)=>{
        //     setRecipes(res.data)
        // })
        // const user_id  = useSelector((state)=>state.auth.user.id);
        dispatch(fetchFavourites(user_id))
    }, [])
    
    return (
    <div className='w-[1200px] mx-auto mt-10 bg-slate-100 p-2 grid grid-cols-3 gap-4'>
        {
            recipes.length <1 && <div className='text-5xl text-center mx-auto w-[1000px] p-20 ml-10'>Your Favourites are Empty!</div>
        }
        {
        recipes.map((data,key)=>(
            <Card sx={{ maxWidth: 345 ,cursor:'pointer'}}>
            <CardHeader avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    <img src={`http://127.0.0.1:8000/uploads/${data.user.image}`} alt=""/>
                                </Avatar>
                                }
                        action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                                }
                        title={data.recipe.title}
                        subheader={(data.recipe.created_at).slice(0,10)+" "+`By ${data.user.first_name} ${data.user.last_name}`}
            />
            <CardMedia
                    sx={{height:200 ,width:330,margin:"auto"}}
                    component="img"
                    height="400"
                    image={`http://127.0.0.1:8000/uploads/${data.medias[0].media}`}
                    alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{height:60,overflow:'hidden'}}>
                    {data.recipe.description}
                </Typography>
            </CardContent>

            {/*---- Rating -----*/}
            <Rating className='ml-5' size="large" defaultValue={data.rating} readOnly/>
            {/* --------------- */}
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={(e)=>{
                    const recipe_id = data.recipe.id;
                    if(user_id){
                        // console.log('success')
                        axios.post('http://127.0.0.1:8000/api/fav/delete',{user_id:user_id,recipe_id:recipe_id}).then(async(res)=>{
                                await dispatch(remove(recipe_id))
                                if(res.data){
                                    await Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Removed this item successfully',
                                        showConfirmButton: false,
                                        timer: 2000
                                    })

                                }
                        })
                    }
                    else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'You should be login!',
                            footer: '<a href="http://127.0.0.1:8000/login">Go to login page?</a>'
                        })
                    }

                }}>
                    <span className='text-red-600 font-extrabold'>Remove</span>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <Link to={`/recipe/${data.recipe.id}`} className='font-bold text-lg'>Details</Link>
            </CardActions>
    </Card>
        ))
        }
    </div>
)
}

export default Favourite