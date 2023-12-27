import { Product, products } from "@/utils/products";
import {create} from "zustand"

type Cart = {
    product: Product,
    amount: number
}

interface SetProductAmountProps {
    id: Product["id"];
    amount: number;
}

interface CartState {
    cart: Cart[];
    addNewProduct: (product: Product["id"]) => void;
    increaseExistentProduct: (id: Product["id"]) => void;
    removeProduct: (id: Product["id"]) => void;
    decreaseExistentProduct: (id: Product["id"]) => void;
    setProductAmount: ({id, amount}: SetProductAmountProps) => void;
}

export const useCart = create<CartState>((set) => ({
    cart: [],
    addNewProduct(productId) {
        set((state) => {
            const product = products.find(item => item.id === productId);

            if(product) {
                return {
                    cart: [
                        ...state.cart,
                        {
                            product,
                            amount: 1
                        }
                    ]
                }
            } else {
                return {
                    cart: state.cart,
                }
            }
        })
    },
    increaseExistentProduct(id) {
       set(state => {
            const newCart = state.cart.map((item) => {
                if(item.product.id === id) {
                    return {
                        ...item,
                        amount: item.amount + 1
                    }
                }
                    
                return item;
            })

            return {
                cart: newCart 
            }
       })
    },
    decreaseExistentProduct(id) {
        set(state => {
            const newCart = state.cart.map((item) => {
                if(item.product.id === id) {
                    return {
                        ...item,
                        amount: item.amount - 1
                    }
                }
                    
                return item;
            })
    
            return {
               cart: newCart 
            }
        })
    },
    removeProduct(id) {
        set(state => {
            const newCart = state.cart.filter(item => item.product.id !== id)
    
            return {
               cart: newCart 
            }
        })
    },
    setProductAmount({id, amount}) {
        set(state => {
            const newCart = state.cart.map((item) => {
                if(item.product.id === id) {
                    return {
                        ...item,
                        amount
                    }
                }
                    
                return item;
            })
    
            return {
               cart: newCart 
            }
        })
    },
}))