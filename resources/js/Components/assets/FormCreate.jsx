import { useForm, usePage } from "@inertiajs/react"
import InputLabel from "../InputLabel"
import PrimaryButton from "../PrimaryButton"
export default function FormCreate() {
    
    // const {visit} = usePage()

    const {errors} = usePage().props
    
    const {data, setData, post, processing} = useForm({
        name: '',
        email: '',
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        post('/createformpost'
        // , {
        //     onSuccess: () =>{
        //         visit('/')
        //         // visit(route('home'))
        //     },
        //     onError: ()=>{
        //         // visit('/login')
        //     }
        // }
        )
    }
 
    return (
    <div className="w-300">
        <form onSubmit={handleSubmit} className="flex flex-col p-3 space-y-5" >
            
            <input type="text" className={`p-3 rounded-md ${errors.name && 'border-red-500 bottom-2 '}`} name="name" placeholder="Имя" value={data.name} onChange={(e)=>setData('name', e.target.value)} />
            {errors.name && <div className="text-red-500">{errors.name}</div>}
            
            <input type="email" className={`p-3 rounded-md ${errors.name && 'border-red-500 bottom-2 '}`} name="email" placeholder="Почта" value={data.email} onChange={(e)=>setData('email', e.target.value)} />
            {errors.email && <div className="text-red-500">{errors.email}</div>}
            <PrimaryButton type="submit" disabled={processing}>Создать</PrimaryButton>
        </form>
    </div>
  )
}
