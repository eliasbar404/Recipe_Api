import React from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
import { fetchCreator } from '@/Redux/Slices/creatorSlice';
import RecipeCard from './RecipeCard';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import axios from 'axios';












const CreatorProfile = () => {
    const user_id  = useSelector((state)=>state.auth.user.id);
    const data  = useSelector((state)=>state.creator.contents);
    const [follow,setFollow] = React.useState(false);
    const [reload,setReload] = React.useState(false);
    const dispatch = useDispatch();
    const {id} = useParams();

    const isLoading = useSelector((state)=>state.creator.isLoading);
    

    const follower_id = useSelector((state)=>state.auth.user.id);


    React.useEffect(() => {
        dispatch(fetchCreator(id))

        if(!isLoading){
                const is = (data.followers).map((val)=>{
                    if(val.follower_id == user_id) return true;
                    else return false;
                })

                setFollow(is[0])



                }


    // },[reload]);
},[reload]);




    const make_follow = ()=>{
        const followed_id = data.user.id;
        axios.post('http://127.0.0.1:8000/api/follow',{
            follower_id:follower_id,
            followed_id:followed_id
        }).then((res)=>{
            // const navigate = useNavigate();
            // navigate("/profile/"+id);
            setReload(!reload)
        })
        
    }
    const un_follow = ()=>{
        const followed_id = data.user.id;
        axios.post('http://127.0.0.1:8000/api/follow/delete',{
            follower_id:follower_id,
            followed_id:followed_id
        }).then((res)=>{
            setReload(!reload)
        })
        
    }

    return (
    <div>

        {
            !isLoading &&
                <div className='w-[900px] mx-auto mt-20'>
                    <header className='flex items-center justify-evenly'>
                        <img src={`http://127.0.0.1:8000/uploads/${data.user.image}`} alt="" className='w-[120px] h-[120px] rounded-full' />
                        {/* Info */}
                        <div className='flex flex-col'>
                            <span className='font-extrabold text-2xl uppercase'>{`${data.user.first_name} ${data.user.last_name}`}</span>
                            <span className='font-extrabold text-lg'>{`${data.user.email}`}</span>
                        </div>
                        
                        {/* Follower */}
                        <div className='flex space-x-5 items-center'>
                            <span className='font-extrabold text-lg'>{`(${data.followers_number})`}Followers</span>
                            {
                                follow?<button onClick={un_follow} className='uppercase bg-slate-50 text-orange-500 border-orange-500 border-2 px-10 py-2 font-extrabold rounded-sm hover:bg-orange-800'>UNFollow</button>:<button onClick={make_follow} className='uppercase bg-orange-600 text-slate-50 px-10 py-2 font-extrabold rounded-sm hover:bg-orange-800'>Follow</button>
                            }
                            
                        </div>
                    </header>
                    {/* Bio */}
                    <div className='mt-20'>
                        <h2>Bio:</h2>
                        <p>{data.user.profile}</p>
                    </div>

                    {/* REcipe */}
                    <div className='bg-slate-100 mt-20 p-10'>
                        <Swiper slidesPerView={1} centeredSlides={false} slidesPerGroupSkip={1} grabCursor={true} keyboard={{enabled: true,}} breakpoints={{769: {slidesPerView: 2,slidesPerGroup: 2,},}} scrollbar={true} navigation={true} pagination={{clickable: true,}} modules={[Keyboard, Scrollbar, Navigation, Pagination]} className="mySwiper">
                                {
                                    data.recipes.map((val,key)=>(
                                        <SwiperSlide key={key}> 
                                            <RecipeCard data={val}/>
                                        </SwiperSlide>
                                        ))
                                }
                                {
                                    data.recipes.map((val,key)=>(
                                        <SwiperSlide key={key}> 
                                            <RecipeCard data={val}/>
                                        </SwiperSlide>
                                        ))
                                }
                                {
                                    data.recipes.map((val,key)=>(
                                        <SwiperSlide key={key}> 
                                            <RecipeCard data={val}/>
                                        </SwiperSlide>
                                        ))
                                }
                        </Swiper>
                    </div>


                </div>
        }
    </div>
)
}

export default CreatorProfile