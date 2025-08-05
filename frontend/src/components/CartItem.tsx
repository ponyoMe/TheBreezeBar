import { useState } from "react";
import { useCart } from "../context/CartContext";
import { FaTrash } from "react-icons/fa6";

//items of the cart 
export function CartItem(){

    const myCart = useCart()
    const total = myCart.items.reduce((sum, item)=> sum+item.product.price*item.quantity,0)

    return(
        <div className="m-2 pl-2 flex flex-row gap-5 p-3">
            <div className=" items-start border-2 border-gray-400 rounded-2xl min-w-[450px]">
                {myCart.items.map(item=>(
                    <div className="flex flex-row items-center gap-10">
                        
                        <img src={item.product.image} className="w-[150px] h-[170px]"  />
                        <div>
                            <h3 className="text-xl font-serif">{item.product.name}</h3>
                            <p className="font-mono">{item.product.price}KZT</p>
                        </div>
                        <div className="flex flex-row items-center gap-3 border-2 border-gray-400 rounded-2xl px-3 py-1">
                            <span onClick={()=>myCart.removeItem(item.product)} className="p-1 rounded-full cursor-pointer hover:bg-gray-200">-</span>
                            <span className="text-xl font-serif">{item.quantity}</span>
                            <span onClick={()=>myCart.addItem(item.product)} className="p-1 rounded-full cursor-pointer hover:bg-gray-200">+</span>

                        </div>
                        <div className="p-2 m-2"> 
                            <span className="font-mono">{item.product.price*item.quantity}KZT</span>
                        </div>

                        <span className="text-2xl font-mono p-3 cursor-pointer" onClick={()=>myCart.emptyCart(item.product)}>X</span>
    
                    </div>
                ))}
                
            </div>
            <div className="flex flex-col items-start gap-2 border-2  border-gray-400 rounded-2xl p-3 w-[200px] h-[210px]">
                <h3>Order summary</h3>
                <div className="flex w-full justify-between text-gray-600">
                    <h1>Sub Total</h1>
                    <span>{total}</span>
                    
                </div>
                <br />
            
                <h1 className="text-lg font-serif">Total: {total}KZT</h1>
                <button className="p-2 bg-blue-300 hover:bg-blue-400 rounded-2xl">Proceed to Checkout</button>
            </div>

        </div>
    )

}