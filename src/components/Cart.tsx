import { ShoppingCart } from "lucide-react";

export function Cart() {
    return (
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-all">
            <div className="flex flex-col items-end">
                <strong className="text-sm">My Cart</strong>
                <span className="text-xs text-zinc-400">1 item</span>
            </div>

            <ShoppingCart size={30} />
        </div>
    )
}