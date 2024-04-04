import { useForm, usePage } from "@inertiajs/react"
import InputLabel from "../InputLabel"
import PrimaryButton from "../PrimaryButton"
import { useState } from "react";
export default function FormCreate() {
    const {errors, radioitems} = usePage().props
    const [message, setMessage] = useState('')

    const {data, setData, post, processing, progress} = useForm({
        name: '',
        email: '',
        radioValue: '',
        avatar: null
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        post('/createformpost'
        , {
            onError:() =>{
                setMessage('не удалось добавить запись')
            },
            onSuccess: () =>{
             setMessage('Запись добавлена')
            },
        }
        )
    }
    return (
    <div className="w-300">
        <form onSubmit={handleSubmit} className="flex flex-col p-3 space-y-5" >
            
            <input type="text" className={`p-3 rounded-md ${errors.name && 'border-red-500 bottom-2 '}`} name="name" placeholder="Имя" value={data.name} onChange={(e)=>setData('name', e.target.value)} />
            {errors.name && <div className="text-red-500">{errors.name}</div>}
            
            <input type="email" className={`p-3 rounded-md ${errors.email && 'border-red-500 bottom-2 '}`} name="email" placeholder="Почта" value={data.email} onChange={(e)=>setData('email', e.target.value)} />
            {errors.email && <div className="text-red-500">{errors.email}</div>}
            
            <input type="file" className={`p-3 rounded-md ${errors.avatar && 'border-red-500 bottom-2 '}`} name="avatar" onChange={(e)=>setData('avatar', e.target.files[0])} />
            {errors.avatar && <div className="text-red-500">{errors.avatar}</div>}
            {progress && (
            <progress value={progress.percentage} max="100">
                {progress.percentage}%
            </progress>)
            }

            {radioitems.map(radio=>
                <div className=" space-x-3">
                    <input 
                        type="radio" 
                        name="radioGroup" 
                        value={radio} 
                        checked={data.radioValue === radio} 
                        onChange={(e)=>setData('radioValue', e.target.value)} 
                    />
                    <label htmlFor={radio} >{radio}</label>
                </div>
            )}
            {errors.radioValue && <div className="text-red-500">{errors.radioValue}</div>}

            <PrimaryButton type="submit" disabled={processing}>Создать</PrimaryButton>            
            {message && <div className="">{message}</div>}

        </form>
    </div>
  )
}

