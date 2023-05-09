import React from 'react';
import { useForm ,useFieldArray } from "react-hook-form";


const CreateRecipe = () => {
    const form = useForm({
        defaultValues:{
            title:"",
            category_id:"",
            origin:"",
            difficulty:"",
            time:"",
            description:"",
            steps:[{description:"",duration:"",media:"",type:""}],
            ingredients:[{name:"",quantity:"",type:"",media:""}],
            medias:[{type:"",media:""}]
        }
    })

    const { register, control,handleSubmit, watch, formState: { errors } } = form;
    const onSubmit = data =>{

        console.log(data);

    } 


    const {
        fields: stepsFields,
        append: stepsAppend,
        remove: stepsRemove
    } = useFieldArray({ control, name: "steps" });

    const {
        fields: ingredientsFields,
        append: ingredientsAppend,
        remove: ingredientsRemove
    } = useFieldArray({ control, name: "ingredients" });

    const {
        fields: mediasFields,
        append: mediasAppend,
        remove: mediasRemove
    } = useFieldArray({ control, name: "medias" });

    return (
        <form className='px-10 py-10 flex flex-col gap-3 bg-slate-50 mt-10 mx-2 rounded-sm' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='self-center text-4xl'>Create a new Recipe</h1>
            {/* title */}
            <div className='flex flex-col mt-10'>
                <label htmlFor="" className='font-bold text-2xl'>Title:</label>
                <input className='w-[400px] p-2 border border-black rounded-sm' {...register("title", { required: true })} />
            </div>
            {/* category select */}
            <div className='flex flex-col'>
                <label htmlFor="" className='font-bold text-2xl'>Category:</label>
                <select className='w-[200px] p-2 border border-black rounded-sm' {...register("category_id", { required: true })}>
                    <option value=""></option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
            </div>
            {/* Origin */}
            <div className='flex flex-col'>
                <label htmlFor="" className='font-bold text-2xl'>Origin:</label>
                <input className='w-[400px] p-2 border border-black rounded-sm' {...register("origin", { required: false })} />
            </div>
            {/* difficulty */}
            <div className='flex flex-col'>
                <label htmlFor="" className='font-bold text-2xl'>Difficulty:</label>
                <select className='w-[200px] p-2 border border-black rounded-sm' {...register("difficulty", { required: true })}>
                    <option value=""></option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            {/* Time */}
            <div className='flex flex-col'>
                <label htmlFor="" className='font-bold text-2xl'>Time:</label>
                <input className='w-[200px] p-2 border border-black rounded-sm' {...register("time", { required: true })} type="number" name="" id=""  />

            </div>
            {/* description */}
            <div className='flex flex-col'>
                <label htmlFor="" className='font-bold text-2xl'>Description:</label>
                <textarea className='w-[400px] p-2 border border-black rounded-sm resize-none' name="" id="" cols="30" rows="5" {...register("description", { required: true })}></textarea>
            </div>
            {/* Ingredients */}
            <fieldset className='border border-black p-2'>
                <legend className='text-2xl'>Ingredients</legend>
                {
                    ingredientsFields.map((field,index)=>(
                    <div className='flex items-center gap-1 p-2'>
                            <label htmlFor="">Name:</label>
                            <input type="text" name="" id="" {...register(`ingredients.${index}.name`, { required: true })}/>
                            <label htmlFor="">Quantity:</label>
                            <input type="text" name="" id="" {...register(`ingredients.${index}.quantity`, { required: true })}/>
                            <label htmlFor="">Type:</label>
                            <select {...register(`ingredients.${index}.type`, { required: true })}>
                                <option value=""></option>
                                <option value="l">l</option>
                                <option value="kg">kg</option>
                                <option value="ml">ml</option>
                                <option value="g">g</option>
                                <option value="unit">unit</option>
                            </select>
                            <label htmlFor="">Media:</label>
                            <input type="file" name="" id="" {...register(`ingredients.${index}.media`, { required: false })}/>

                            {
                                index > 0 && <button className='bg-red-500 uppercase px-5 text-slate-100' onClick={()=>ingredientsRemove(index)}>Remove</button>

                            }
                    </div>
                    ))
                }
                <button className='bg-green-500 uppercase px-5 text-slate-100' onClick={()=>ingredientsAppend({name:"",quantity:"",type:"",media:""})}>add</button>
            </fieldset>
            {/* Steps */}
            <fieldset className='border border-black p-2'>
                <legend className='text-2xl'>Steps</legend>
                {
                    stepsFields.map((field,index)=>(
                    <div className='flex items-center gap-4 p-2'>
                            <label htmlFor="">Description:</label>
                            <input type="text" name="" id="" {...register(`steps.${index}.description`, { required: true })}/>
                            <label htmlFor="">Duration:</label>
                            <input type="number" name="" id="" {...register(`steps.${index}.duration`, { required: true })}/>
                            <label htmlFor="">Media:</label>
                            <input className='w-[220px]' type="file" name="" id="" {...register(`steps.${index}.media`, { required: false })}/>
                            <label htmlFor="">Type:</label>
                            <select {...register(`steps.${index}.type`, { required: false })}>
                                <option value=""></option>
                                <option value="image">Image</option>
                                <option value="video">Video</option>
                            </select>
                            {
                                index > 0 && <button className='bg-red-500 uppercase px-5 text-slate-100' onClick={()=>stepsRemove(index)}>Remove</button>

                            }
                    </div>
                    ))
                }
                <button className='bg-green-500 uppercase px-5 text-slate-100' onClick={()=>stepsAppend({description:"",duration:"",media:"",type:""})}>add</button>
            </fieldset>

            {/* Recipes Media */}
            <fieldset className='border border-black  p-2'>
                <legend className='text-2xl'>Recipe Media</legend>
                {
                    mediasFields.map((field,index)=>(
                    <div className='flex items-center gap-4 p-2'>

                            <label htmlFor="">Media:</label>
                            <input type="file" name="" id="" {...register(`medias.${index}.media`, { required: true })}/>
                            <label htmlFor="">Type:</label>
                            <select {...register(`medias.${index}.type`, { required: true })}>
                                <option value=""></option>
                                <option value="image">Image</option>
                                <option value="video">Video</option>
                            </select>
                            {
                                index > 0 && <button className='bg-red-500 uppercase px-5 text-slate-100' onClick={()=>mediasRemove(index)}>Remove</button>

                            }
                    </div>
                    ))
                }
                <button className='bg-green-500 uppercase px-5 text-slate-100' onClick={()=>mediasAppend({media:"",type:""})}>add</button>
            </fieldset>




            <input type="submit" value="Create" className='bg-green-700 text-slate-200 text-3xl py-2 cursor-pointer mt-3 rounded-sm hover:bg-green-400 hover:text-green-900' />
            
    </form>
)
}

export default CreateRecipe