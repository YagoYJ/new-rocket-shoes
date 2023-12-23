"use client"

import { useState } from "react";
import { MinusCircle, PlusCircle } from "lucide-react";
import { Product } from "@/utils/mockedProducts"

interface Props {
    productId: Product["id"]
}

export function ProductAmountInput ({productId}: Props) {
    const [currentAmount, setCurrentAmount] = useState(0);

    // TODO: Create a global state to change the amount
    function addProductAmount() {
        console.log("Adding one " + productId);
        setCurrentAmount(prev => prev + 1)
    }
    
    function removeProductAmount() {
        if(currentAmount > 0) {
            console.log("Removing one " + productId);
            setCurrentAmount(prev => prev - 1)
        }
    }

    return (
        <div className="flex items-center justify-center gap-2">
            <button
                onClick={removeProductAmount}
                disabled={currentAmount === 0}
                className="disabled:opacity-40 disabled:cursor-not-allowed"
            >
                <MinusCircle className="text-purple-700" size={20} />
            </button>

            <input
                className="max-w-[50px] text-zinc-600 text-xs h-8 border rounded-md border-zinc-400 px-2" 
                value={currentAmount}
                onChange={e => setCurrentAmount(+e.target.value)}
            />
            
            <button 
                onClick={addProductAmount}
                className="disabled:opacity-40 disabled:cursor-not-allowed"
            >
                <PlusCircle className="text-purple-700" size={20} />
            </button>
        </div>
    )
}