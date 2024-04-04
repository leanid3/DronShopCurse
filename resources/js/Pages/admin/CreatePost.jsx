import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import { useForm } from '@inertiajs/react'
import React, { useState } from 'react'

export default function CreatePost() {


  const {data, setData, post, errors, processing, progress} = useForm({
    postTitle: '',
    postDescription: '',
    postRating:'',
    postPrice:'',
    postResRafio: '',
    postImage: null,
  })


  const hundleTarget =(e) =>{
    const {name, value} = e.target
    setData(name, value)
  }

  const Sumbit = (e) =>{
    e.preventDefault()
    // post(route(''))
  }
    return (
    <form onSubmit={Sumbit}>
        
        <div className="">
            <InputLabel htmlFor="Название товара" value='title'/>
            
            <TextInput
            id="postTitle"
            name="postTitle"
            value={data.postTitle}
            onChange={hundleTarget}
            />
            
            <InputError message={errors.postTitle} />
        </div>

        <div className="">
            <InputLabel htmlFor="Описание товара" value='description'/>
            
            <TextInput
            id="postDescription"
            name="postDescription"
            value={data.postDescription}
            onChange={hundleTarget}
            />

            <InputError message={errors.postDescription} />
        </div>

        <div className="">
            <InputLabel htmlFor="Рейтинг" value='rating'/>
            <TextInput
            type="number"
            id="postRating"
            name="postRating"
            value={data.postRating}
            onChange={hundleTarget}
            />
            <InputError message={errors.postRating} />
        </div>

        <div className="">
            <InputLabel htmlFor="Цена" value='price'/>
            
            <TextInput
                type="number"
                id="postPrice"
                name="postPrice"
                value={data.postPrice}
                onChange={hundleTarget}
            />

            <InputError message={errors.postPrice} />
        </div>

        <div className="">
            <InputLabel htmlFor="Статус" value='status'/>

            <input type="radio" value='в наличии' checked={postResRafio === 'в наличии'} onChange={()=>postResRafio('')} />
            <InputError message={errors.postStatus} />
        </div>
        
    </form>
  )
}


