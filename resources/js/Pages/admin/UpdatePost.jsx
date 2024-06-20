import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";

export default function UpdatePost({auth, product}) {
    console.log(product.brend.id)
    const [message, setMessage] = useState("");
    const { brends, categories, status } = usePage().props;
    const { data, setData, post, errors, processing, progress } = useForm({
        brend_id: product.brend.id,
        category_id: product.category.id,
        title: product.title,
        description: product.description,
        rating: product.rating,
        price: product.price,
        status: product.status,
        image:  product.image,
    });
    console.log(product)
    const hundleTarget = (e) => {
        const { name, type } = e.target;
        let res = 0;

        switch (type) {
            case "file":
                res = e.target.files[0];
                break;

            case "radio":
            case "select-one":
                res = Number.parseInt(e.target.value, 10);
                break;

            default:
                res = e.target.value;
        }
        setData(name, res);
    };

    const Sumbit = (e) => {
        e.preventDefault();
        post(route("productUpdate"), {
            onSuccess: () => {
                setMessage("Продукт добавлен");
            },

            onError: () => {
                setMessage("Не удалось добавить продукт");
            },
        });
    };
    return (
        <Authenticated user={auth}>
            <Head title="Cоздания товара" />
            <main className="mx-auto my-14 container flex flex-col items-center">
                <form
                    onSubmit={Sumbit}
                    className="flex flex-col w-1/3 space-y-10 rounded-lg bg-lightgrey/45 shadow-md p-5"
                >
                    <h2 className="text-xl text-center">
                        Форма создания товара
                    </h2>
                    <ul>
                        <InputLabel value="Бренды:" htmlFor="brend_id" />

                        {brends.map(({ brend, id }) => (
                            <li className="flex space-x-3" key={id}>
                                <input
                                    id={`brend_id-${id}`}
                                    name="brend_id"
                                    type="radio"
                                    value={id}
                                    checked={data.brend_id === id}
                                    onChange={hundleTarget}
                                />
                                <label htmlFor={`brend_id-${id}`}>
                                    {brend}
                                </label>
                            </li>
                        ))}

                        <InputError message={errors.brend_id} />
                    </ul>

                    <div>
                        <InputLabel value="Категории:" />
                        <select
                            name="category_id"
                            value={data.category_id}
                            onChange={hundleTarget}
                        >
                            <option value="">Выберете опцию</option>

                            {categories.map(({ categoryName, id }) => {
                                return (
                                    <option key={id} value={id}>
                                        {categoryName}
                                    </option>
                                );
                            })}
                        </select>

                        <InputError message={errors.category_id} />
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="title"
                            value="Название товара:"
                        />

                        <TextInput
                            id="title"
                            name="title"
                            value={data.title}
                            onChange={hundleTarget}
                        />

                        {errors.title && (
                            <InputError message={errors.title} />
                        )}
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="description"
                            value="Описание товара:"
                        />

                        <TextInput
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={hundleTarget}
                        />

                        {errors.description && (
                            <InputError message={errors.description} />
                        )}
                    </div>

                    <div>
                        <InputLabel htmlFor="rating" value="Рейтинг:" />

                        <TextInput
                            type="number"
                            id="rating"
                            name="rating"
                            value={data.rating}
                            onChange={hundleTarget}
                        />

                        {errors.rating && (
                            <InputError message={errors.rating} />
                        )}
                    </div>

                    <div>
                        <InputLabel htmlFor="price" value="Цена:" />

                        <TextInput
                            type="number"
                            id="price"
                            name="price"
                            value={data.price}
                            onChange={hundleTarget}
                        />

                        {errors.price && (
                            <InputError message={errors.price} />
                        )}
                    </div>

                    <div>
                        <InputLabel htmlFor="status" value="Статус:" />

                        <div className="flex flex-col space-y-2">
                            <label>
                                <input
                                    type="radio"
                                    name="status"
                                    value="в наличии"
                                    checked={data.status === "в наличии"}
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                />

                                <span>в наличии</span>
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="status"
                                    value="нет в наличии"
                                    checked={
                                        data.status === "нет в наличии"
                                    }
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                />

                                <span>нет в наличии</span>
                            </label>
                        </div>

                        {errors.status && (
                            <InputError message={errors.status} />
                        )}
                    </div>

                    <div>
                        <InputLabel htmlFor="Картинка" value="image" />

                        <input
                            type="file"
                            name="image"
                            onChange={hundleTarget}
                        />

                        {errors.image && (
                            <InputError message={errors.image} />
                        )}

                        {progress && (
                            <progress value={progress.percentage} max="100">
                                {progress.percentage}%
                            </progress>
                        )}

                        <img className='w-20 h-20 rounded-lg' src={product.image} alt={product.id} />
                    </div>

                    <PrimaryButton
                        className=" w-44 text-center"
                        type="submit"
                        disabled={processing}
                    >
                        Обновить
                    </PrimaryButton>

                    {message && <div className="text-red-500">{message}</div>}
                </form>
            </main>
        </Authenticated>
    );
}
