import type { ProductProps } from "../type/product";

//bg-[#ccd0df]

type ProductCardProps = {
  product: ProductProps,
  onClick: (product:ProductProps) => void;
}

function ProductCard(props:ProductCardProps){
  
    
    return(
           <div onClick={()=> props.onClick(props.product)} className="flex-shrink-0 relative w-[200px] h-[210px] mt-10 bg-[#9ba8ab] rounded-2xl  overflow-visible px-2 cursor-pointer  hover:scale-105 transition-all duration-300 ease-in-out shadow-lg">
              
               <img
                    src={props.product.image}
                   alt={props.product.name}
                 className="w-[150px] h-[180px] object-contain absolute -top-10 left-1/2 transform -translate-x-1/2 z-10 hover:scale-110 transition-transform duration-300 ease-in-out"
                 />
               

                <div className="absolute bottom-2 left-2 right-2 z-20 text-center">
                  <h2 className="text-md font-sans mb-1">{props.product.name}</h2>
                   <p className="text-md font-semibold">{props.product.price}KZT</p>
                </div>
                
            </div>

    )


}

export default ProductCard;