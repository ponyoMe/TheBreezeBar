import ProductCard from "../components/ProductCard";
import { coffeeProducts, drinksProducts, foodProducts, snackProducts, teaProducts } from "../type/product";





function Menu() {

  return (
    <div className="flex flex-col items-center min-h-screen gap-10">
      <div className="w-full">
        <h1 className="text-2xl uppercase font-semibold">Coffee</h1>
        <div className="flex flex-row flex-nowrap overflow-x-auto gap-x-6 p-4">
        {
          coffeeProducts.map(p=>( 
              <ProductCard {...p} />
          ))
        }
        </div>
      </div>

      <div className="  w-full">
        <h1 className="text-2xl uppercase font-semibold">Tea</h1>
        <div className="flex flex-row flex-nowrap  overflow-x-auto gap-9 p-4">
        {
          teaProducts.map(p=>( 
              <ProductCard {...p} />
          ))
        }
        </div>
      </div>

      <div className=" w-full">
        <h1 className="text-2xl uppercase font-semibold">Drinks</h1>
        <div className="flex flex-row flex-nowrap overflow-x-auto gap-9 p-4">
        {
          drinksProducts.map(p=>( 
              <ProductCard {...p} />
          ))
        }
        </div>
      </div>

      <div className=" w-full">
        <h1 className="text-2xl uppercase font-semibold">Food</h1>
        <div className="flex flex-row flex-nowrap overflow-x-auto gap-15 p-4">
        {
          foodProducts.map(p=>( 
              <ProductCard {...p} />
          ))
        }
        </div>
      </div>

      <div className=" w-full">
        <h1 className="text-2xl uppercase font-semibold">Snacks</h1>
        <div className="flex flex-row flex-nowrap overflow-x-auto gap-9 p-4">
        {
          snackProducts.map(p=>( 
              <ProductCard {...p} />
          ))
        }
        </div>
      </div>


      
    </div>
  );
}

export default Menu;
