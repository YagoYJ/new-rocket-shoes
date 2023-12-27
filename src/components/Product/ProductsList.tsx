import { products } from "@/utils/products";
import { ProductCard } from "./ProductCard";

export function ProductsList () {
    return (
       <main className="w-full grid grid-cols-3 gap-7 my-10">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} /> 
            ))}
       </main>
    )
}