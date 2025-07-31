import type { ProductProps } from "../type/product";



function ProductCard(props:ProductProps){
    
    return(
            <div className="flex-shrink-0 relative w-[170px] h-[200px] rounded-2xl bg-gray-500 overflow-visible px-2">
 
               <img
                    src={props.image}
                   alt={props.name}
                 className="w-[150px] h-[180px] object-contain absolute -top-10 left-1/2 transform -translate-x-1/2 z-10"
                 />

                <div className="absolute bottom-2 left-2 right-2 z-20 text-center">
                  <h2 className="text-md font-sans mb-1">{props.name}</h2>
                   <p className="text-md font-bold">{props.price}KZT</p>
                </div>
            </div>

    )


}

export default ProductCard;