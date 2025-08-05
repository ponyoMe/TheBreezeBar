import { NavLink } from "react-router";
import { GiCoffeeCup } from "react-icons/gi";
import { GiTeapotLeaves  } from "react-icons/gi";
import { Martini, Sandwich } from "lucide-react";
import bgm from '../assets/images/bgm.png'
import { PiBowlFoodFill } from "react-icons/pi";
import { useState } from "react";
import { coffeeProducts, drinksProducts, foodProducts, snackProducts, teaProducts, type ProductProps } from "../type/product";
import ProductSection from "../components/ProductSection";
import { IoIosArrowDropright } from "react-icons/io";
import { useActivePage } from "../context/ActivePageContext";
import bbbg1 from '../assets/images/bbbg1.jpg'
import bbbg2 from '../assets/images/bbbg2.jpg'
import bbbg3 from '../assets/images/bbbg3.jpg'
import bbbg4 from '../assets/images/bbbg4.jpg'
import menubg from '../assets/images/menubg.png'


function Home() {

  const activePageContext = useActivePage()

  const [products, setProducts] = useState<ProductProps['type']>('coffee');
  const product = ()=>{
    switch(products){
      case 'coffee':
        return {products: coffeeProducts, limit: 3}
      case 'tea':
        return {products: teaProducts, limit: 3}
      case 'alcohol':
        return {products: drinksProducts, limit: 3}
      case 'snack':
        return {products: snackProducts,  limit: 3} 
      case 'food':
        return {products: foodProducts, limit: 3}       
    }
  }

  const styleForImg = 'w-[250px] h-[300px] rounded-xl'
  

  return (
    <div className="flex flex-col min-h-screen m-10 mt-0">
      <div className="flex flex-row items-center justify-evenly gap-10 m-3 p-4">
        <div className="m-7">
            <h1 className="text-5xl font-semibold">Pour up.</h1>
            <h1 className="text-5xl font-semibold">Drink.</h1>
            
            <button onClick={()=>activePageContext.setActivePage('Menu')} className="bg-blue-300 text-white py-2 px-4 rounded-2xl m-4 hover:bg-blue-400 transition-colors">
          <NavLink to="/menu">View Menu</NavLink>
        </button>
        
        <div className="flex flex-row items-center gap-5">
            <GiCoffeeCup size={50} onClick={() => setProducts('coffee')} className="border border-blue-300 p-2 rounded-2xl bg-transparent hover:border-blue-500 hover:border-2" />
            <GiTeapotLeaves  size={50} onClick={() => setProducts('tea')} className="border border-blue-300 p-2 rounded-2xl bg-transparent hover:border-blue-500 hover:border-2" />
            <Martini size={50} onClick={() => setProducts('alcohol')} className="border border-blue-300 p-2 rounded-2xl bg-transparent hover:border-blue-500 hover:border-2" />
            <Sandwich size={50} onClick={() => setProducts('snack')} className="border border-blue-300 p-2 rounded-2xl bg-transparent hover:border-blue-500 hover:border-2" />
            <PiBowlFoodFill size={50} onClick={() => setProducts('food')} className="border border-blue-300 p-2 rounded-2xl bg-transparent hover:border-blue-500 hover:border-2" />
        </div>

        </div>
        <div className="flex flex-col items-center justify-center">
            <img src={menubg} className="w-50" />
        </div>

      
      </div>

      <div className="flex flex-col items-center justify-center gap-10">

        <div className="flex flex-row items-center justify-center p-3">
          <ProductSection {...product()}/>
          <button onClick={()=> activePageContext.setActivePage('Menu')} className="flex flex-col items-center justify-center  p-3  transition-colors">
            <NavLink to="/menu" ><IoIosArrowDropright size={50} className="rounded-full p-2 hover:bg-gray-200" /></NavLink>
            <span className="text-sm">View All</span>
          </button>
        </div>

      </div>

     

      <div className="max-w-xl mx-auto text-center mt-10 px-4">
         <h2 className="text-2xl font-bold font-serif mb-3">The Vibe</h2>
        <p className="text-gray-700 leading-relaxed italic">
          “Some people like the way it feels, some people wanna kill their sorrows...”  
          </p>
          <p className="mt-3">
           At <span className="font-semibold">The Breeze Bar</span>, we believe in slow drinks, real conversations, 
           and in making space for everyone to just be.
           This isn’t a brand — it’s a breathing room. So stay a while. Or just stay still.
            </p>
           
        </div>

         <div className='flex flex-row gap-3 w-full mt-5  items-center justify-center'>
        <img src={bbbg1} className={styleForImg}/>
        <img src={bbbg2} className={styleForImg}/>
        <img src={bbbg3} className={styleForImg}/>
        <img src={bbbg4} className={styleForImg}/>
        
      </div>


        <div className="max-w-xl mx-auto text-left mt-12 px-4">
            <h3 className="text-xl font-bold mb-2 text-center">Opening Hours</h3>
            <ul className="space-y-1 text-gray-700">
              <li>☀️ Monday – Friday: 9:00 AM – 11:00 PM</li>
              <li>🌙 Saturday – Sunday: 10:00 AM – Midnight</li>
            </ul>
        </div>



    </div>
  );
}

export default Home;


