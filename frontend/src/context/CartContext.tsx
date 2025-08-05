import React, { createContext, useContext, useState } from "react"
import type { ProductProps } from "../type/product"

export type CartItems = {
    product: ProductProps,
    quantity: number
}

export type CartProps = {
    items: CartItems[],
    addItem: (product: ProductProps) => void,
    removeItem: (product: ProductProps) => void,
    emptyCart: (product: ProductProps)=>void
}

const CartContext = createContext<CartProps | undefined>(undefined)

export function CartProvider({children}:{children:React.ReactNode}){

    const [item, setItem] = useState<CartItems[] >([])

     const addItem = (p: ProductProps) => {
         setItem((prev)=>{
            const existingItem = prev.find(i=>i.product.id === p.id)
            if(existingItem){
                return prev.map(i=>
                    i.product.id === p.id ? {...i, quantity: i.quantity+1} : i
                )
            }
            return [...prev, {product: p, quantity: 1}]
         })
     }

     const removeItem = (p:ProductProps)=>{
        setItem(prev=>{
            const existingItem = prev.find(i=> i.product.id === p.id)
            if(existingItem){
                if(existingItem.quantity >1){
                    return prev.map(i=>
                        i.product.id === p.id ? {...i, quantity: i.quantity-1} : i
                    )
                }else{
                    return prev.filter(i=>i.product.id !== p.id)
                }
            }
            return prev
        })

     }

     const emptyCart = (p:ProductProps)=>{
        setItem(prev=>{
            const existingItem = prev.find(i=> i.product.id===p.id)
            if(existingItem){
                return prev.filter(i=>
                    i.product.id !== p.id
                )
            }
            return prev
        })
     }


     return (
        <CartContext.Provider value = {{items:item, addItem, removeItem, emptyCart}}>
            {children}
        </CartContext.Provider>
     )



}

export function useCart(){
    const context = useContext(CartContext)
    if(!context){
        throw new Error('useCart must be used within a CartProvider')
    }

    return context
}