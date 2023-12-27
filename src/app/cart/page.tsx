"use client"
import { ProductAmountInput } from "@/components/Product/ProductAmountInput";
import { useCart } from "@/store/useCart";
import { formatCurrency } from "@/utils/formatCurrency";
import { Frown, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Cart() {
    const {cart, removeProduct} = useCart()

    const totalAmount = cart.reduce(
        (accumulator, currentValue) => accumulator + (currentValue.amount * currentValue.product.price),
        0,
    );

    const displayTotalAmount = formatCurrency(totalAmount);

    return (
        <div className="w-full bg-zinc-50 rounded-md p-5 flex flex-col">
            <header className="w-full flex items-center justify-between py-4">
                <span className="text-zinc-400 font-bold flex-1">Product</span>

                <span className="text-zinc-400 font-bold w-[150px] text-center">Amount</span>
                
                <span className="text-zinc-400 font-bold w-[150px] text-center">Subtotal</span>

                <div className="w-10" />
            </header>

            <main className="w-full flex flex-col">
                {cart.length === 0 ? (
                    <div className="flex items-center justify-center gap-2 py-5 text-zinc-700">
                        <p>Your cart is empty</p>
                        <Frown />
                    </div>
                ) : cart.map(cartItem => {
                    const {product, amount} = cartItem;
                    const displayAmount = formatCurrency(product.price)
                    const displaySubtotal = formatCurrency(product.price * amount)

                    return (
                        <div 
                            key={product.id}
                            className="w-full flex items-center justify-between py-5 border-b border-b-zinc-400/50"
                        >
                            <div className="w-[100px] flex items-center justify-center">
                                <Image
                                    className="w-24 h-24"
                                    src={product.image}
                                    alt="Product Image"
                                    width={600}
                                    height={600}
                                />
                            </div>

                            <div className="flex-1">
                                <div className="flex flex-col items-start justify-start pl-4">
                                    <span className="text-zinc-800 font-semibold text-sm">{product.title}</span>
                                    <span className="text-zinc-900 font-bold text-sm">{displayAmount}</span>
                                </div>
                            </div>

                            <div className="w-[150px] flex items-center justify-center">
                                <ProductAmountInput productId={product.id} />
                            </div>

                            <span className="w-[150px] text-zinc-900 font-semibold text-base text-center">{displaySubtotal}</span>

                            <button
                                onClick={() => removeProduct(product.id)}
                                className="w-10 flex items-center justify-center"
                            >
                                <Trash
                                    className="text-purple-600 rounded-full hover:bg-purple-500/40 items-center justify-center p-2"
                                    size={32}
                                />
                            </button>
                        </div>
                    )
                })}

                <div className="text-zinc-800 font-semibold text-xl py-5 flex items-center justify-between">
                    <h3 className="text-zinc-400 text-lg">
                        Total: {" "} 
                        <span className="text-zinc-900 text-2xl">
                            {displayTotalAmount}
                        </span>
                    </h3>

                    {cart.length === 0 ? (
                        <Link
                            href="/"
                            className="px-4 py-2 bg-purple-600 text-zinc-100 rounded hover:opacity-90"
                        >
                            See products
                        </Link>
                    ) : (
                        <button className="px-4 py-2 bg-purple-600 text-zinc-100 rounded hover:opacity-90">
                            Finish order
                        </button>
                    )}
                </div>
            </main>
        </div>
    )
}