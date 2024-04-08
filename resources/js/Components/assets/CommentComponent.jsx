import { useForm } from "@inertiajs/react"
import { useState } from "react"

export default function CommentComponent({auth, productId}) {

    const [message, setMessage] = useState()
    const{data, setData, post, errors, processing} = useForm({
        comment: '',
        product_id: productId,
    })

    const handleChange = (e) =>{
        const{name, value} = e.target
        setData(name, value)
    }

    const Sumbit = (e) =>{
        e.preventDefault()
        post(route('comments.product'), {
            onSuccess: () => {
                setMessage('Отзыв добавлен')
            },
            onError: (userNotAuth)=>{
                setMessage(userNotAuth)
            }
        })
    }

    return (
    <div className=" flex  justify-center">
        <div className="flex flex-col w-80 p-5 border-2 border-red-600">
            <div>
                <img className="w-15 h-15 rounded-full" src={auth.user.avatar} alt={auth.user.avatar} />

                <span>{auth.user.name}</span>
            </div>

            <form onSubmit={Sumbit}>

                <div className="flex flex-col space-y-3">
                    <label htmlFor="comment">Ваш отзыв:</label>

                    <textarea
                        name="comment"
                        cols="15"
                        rows="3"
                        placeholder="ваш отзыв..."
                        value={data.comment}
                        onChange={handleChange}
                        ></textarea>

                    {errors.comment && <div className="text-red-500">{errors.comment}</div>}
                </div>

                <button className="px-4 py-2 bg-darkblue text-lightgrey" disabled={processing} type="submit">отправить</button>
                {message && <div>{message}</div>}
            </form>
        </div>
    </div>
  )
}
