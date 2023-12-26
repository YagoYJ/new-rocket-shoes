"use client"

import { MinusCircle, PlusCircle } from "lucide-react";
import { Product } from "@/utils/mockedProducts"
import { useCart } from "@/store/useCart";

interface Props {
    productId: Product["id"]
}

export function ProductAmountInput ({productId}: Props) {
    const {
        cart,
        addNewProduct,
        increaseExistentProduct,
        decreaseExistentProduct,
        setProductAmount,
        removeProduct
    } = useCart();

    const currentProductAmount = cart.find(item => item.product.id === productId)?.amount || 0

    function increaseProductAmount() {
        if(currentProductAmount === 0) {
            addNewProduct(productId)
        } else {
            increaseExistentProduct(productId)
        }
    }
    
    function decreaseProductAmount() {
        switch (currentProductAmount) {
            case 0:
                break;
            case 1:
                removeProduct(productId);
                break;
            default:
                decreaseExistentProduct(productId)
                break;
        }
    }

    return (
        <div className="flex items-center justify-center gap-2">
            <button
                onClick={decreaseProductAmount}
                disabled={currentProductAmount === 0}
                className="disabled:opacity-40 disabled:cursor-not-allowed"
            >
                <MinusCircle className="text-purple-700" size={20} />
            </button>

            <input
                className="max-w-[50px] text-zinc-600 text-xs h-8 border rounded-md border-zinc-400 px-2" 
                value={currentProductAmount}
                onChange={e => setProductAmount({id: productId, amount: +e.target.value})}
            />
            
            <button 
                onClick={increaseProductAmount}
                className="disabled:opacity-40 disabled:cursor-not-allowed"
            >
                <PlusCircle className="text-purple-700" size={20} />
            </button>
        </div>
    )
}