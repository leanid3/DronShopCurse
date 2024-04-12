import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import ProductsiCart from "@/Components/assets/ProductsiCart";
export default function Cart({ auth, cart }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={`Корзина ${auth.user.name}`} />
            <div className="flex flex-col items-center space-y-3">
                {(
                    <p className="px-3 py-2 w-full text-center bg-gray-600 bottom-1 font-medium">
                        Корзина пуста
                    </p>
                ) && cart.map((item) => <ProductsiCart item={item} />)}
            </div>
        </AuthenticatedLayout>
    );
}
