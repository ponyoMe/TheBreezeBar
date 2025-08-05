import { use } from "react";
import { useCart } from "../context/CartContext";
import { CartItem } from "../components/CartItem";


//displays order sum and i need to add payment method and order details 


function Order() {
 
  const cartContext = useCart() 

  return (
    <div className="flex flex-col items-start min-h-screen ml-10">
      <h1 className="text-2xl font-semibold">Your Order:</h1>
      <CartItem />

      
    </div>
  );
}

export default Order;