import type { ProductProps } from "../type/product";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";


type ModalProps={
    product: ProductProps,
    onClose: () => void;
}

function ProductModal({product, onClose} : ModalProps){
    const [quantity, setQuantity] = useState(1);

    return(
        <div className="absolute -top-20 left-0 right-0 flex item-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 w-[400px] h-[420px] flex flex-col items-center justify-center shadow-lg">
            <div className="flex w-full justify-between items-center mb-4">
                <div className="flex flex-row items-center gap-1 ">
                    <FaCartShopping size={30} className="hover:size-[32px]"/>
                    <span onClick={()=>setQuantity(quantity-1)}>-</span><span>{quantity}</span><span onClick={()=>setQuantity(quantity+1)}>+</span>

                </div>
                <button onClick={onClose} className="bg-red-400 text-white p-2 rounded-2xl" >Close</button>
            </div>
            <div className="flex flex-col items-center">
                <img src={product.image} alt={product.name} className="w-[160px] h-[190px] object-contain" />
                <h2 className="text-md font-sans mb-1">{product.name}</h2>
                <p className="text-md font-bold">{product.price} KZT</p>
                <p className="text-sm">{product.description}</p>

            </div>
            </div>

        </div>
    )
}

export default ProductModal;