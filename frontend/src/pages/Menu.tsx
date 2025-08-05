import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { coffeeProducts, drinksProducts, foodProducts, snackProducts, teaProducts, type ProductProps } from "../type/product";
import ProductSection from "../components/ProductSection";





function Menu() {


  return (
    <div className="flex flex-col items-center min-h-screen gap-10 m-10">
      <ProductSection title="Coffee" products={coffeeProducts} />
      <ProductSection title="Tea" products={teaProducts} />
      <ProductSection title="Drinks" products={drinksProducts} />
      <ProductSection title="Food" products={foodProducts} />
      <ProductSection title="Snacks" products={snackProducts} />
    </div>
  );
}

export default Menu;
