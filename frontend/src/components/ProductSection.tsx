import ProductModal from "../pages/ProductModal";
import type { ProductProps } from "../type/product";
import ProductCard from "./ProductCard";
import { useState } from "react";

type ProductSectionProps = {
    title: string,
    products : ProductProps[]
}

function ProductSection(props:ProductSectionProps) {

    const [selected, setSelected] = useState<ProductProps | null>(null);

    return(
        <div className="w-full relative">
          <h1 className="text-2xl uppercase font-semibold">{props.title}</h1>
        <div className="flex flex-row flex-nowrap overflow-x-auto gap-x-6 p-4">
        {
          props.products.map(p=>( 
              <ProductCard {...p} product={p} onClick={setSelected} />
          ))
        }
        </div>

        {
            selected && <ProductModal product={selected} onClose={() => setSelected(null)} />
        }
        </div>
    )


}

export default ProductSection;

