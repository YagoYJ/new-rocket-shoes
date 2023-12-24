import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Product } from "@/utils/mockedProducts";
import { formatCurrency } from "@/utils/formatCurrency";
import { ProductAmountInput } from "./ProductAmountInput";

export function ProductCard({id, image, price, title}: Product) {
    const displayPrice = formatCurrency(price)

    return (
        <div className="w-full bg-zinc-50 rounded-md p-5 flex flex-col">
            <Image
                src={image}
                alt="Product Image"
                width={600}
                height={600}
            />

            <h2 className="text-zinc-800 font-semibold">
                {title}
            </h2>
            <span className="text-zinc-900 font-bold text-xl mt-2">
                {displayPrice}
            </span>

            <div className="w-full flex items-center justify-between gap-2 mt-auto pt-3">
                <ProductAmountInput productId={id} />
                
                <Link 
                    href={`products/${id}`}
                    className="w-full flex items-center justify-center gap-1 text-purple-700 hover:text-zinc-50 hover:bg-purple-700 transition-all font-bold text-xs p-2 rounded"
                >
                    Go to cart <ArrowRight size={15} />
                </Link>
            </div>
        </div>
    )
}