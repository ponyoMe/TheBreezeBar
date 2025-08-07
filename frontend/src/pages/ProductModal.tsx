import type { ProductProps } from "../type/product";

type ModalProps={
    product: ProductProps,
    onClose: () => void;
}

function ProductModal({product, onClose} : ModalProps){
   
    return(
        <div className="absolute top-0 left-0 right-0 flex item-center justify-center z-50">
            <div className="bg-white border-1 border-[#9ba8ab] rounded-2xl p-6 w-[380px] h-[400px] flex flex-col items-center justify-center shadow-2xl">
            <div className="flex w-full justify-end items-center mb-4">
                
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