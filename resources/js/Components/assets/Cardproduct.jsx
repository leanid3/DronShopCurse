import { HiOutlineShoppingCart } from "react-icons/hi";
import { CgCheckO, CgCloseO } from "react-icons/cg";
import { useState } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import AddCartButton from "../AddCartButton";
export default function Cardproduct({ product }) {
    const [imageLoad, setImageLoad] = useState(true);

    const handleImageLoad = () => {
        setImageLoad(false);
    };

    return (
        <article className="flex flex-col border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <Link href={route("showProduct", { id: product.id })}>
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                    onLoad={handleImageLoad}
                />
            </Link>
            <div className="p-4">
                <p className="text-sm text-gray-600">{product.brend.brend}</p>
                <Link
                    href={route("showProduct", { id: product.id })}
                    className="text-lg font-semibold text-gray-800 hover:underline"
                >
                    {product.title}
                </Link>
                <div className="flex items-center mt-2">
                    <p className="text-lg text-yellow-600 mr-2">
                        {product.rating}
                    </p>
                    <p className="text-lg text-darkblue">
                        {product.price} руб.
                    </p>
                </div>
                <p
                    className={`text-sm flex items-center font-semibold ${product.status === "в наличии" ? "text-green-500" : "text-red-500"}`}
                >
                    {product.status === "в наличии" ? (
                        <CgCheckO className="mr-1" />
                    ) : (
                        <CgCloseO className="mr-1" />
                    )}
                    {product.status}
                </p>

                <AddCartButton productId={product.id} />
            </div>
        </article>
    );
}
