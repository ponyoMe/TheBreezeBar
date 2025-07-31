import { NavLink } from "react-router";
import { GiCoffeeCup } from "react-icons/gi";
import { GiTeapotLeaves  } from "react-icons/gi";
import { Martini, Sandwich } from "lucide-react";
import bgm from '../assets/images/bgm.png'
import { PiBowlFoodFill } from "react-icons/pi";


function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row items-center justify-evenly gap-10 m-3 p-4">
        <div className="m-7">
            <h1 className="text-5xl font-semibold">Pour up.</h1>
            <h1 className="text-5xl font-semibold">Drink.</h1>
            
            <button className="bg-blue-300 text-white py-2 px-4 rounded-2xl m-4">
          <NavLink to="/menu">View Menu</NavLink>
        </button>
        
        <div className="flex flex-row items-center gap-5">
            <GiCoffeeCup size={50} className="border border-blue-300 p-2 rounded-2xl bg-transparent" />
            <GiTeapotLeaves  size={50} className="border border-blue-300 p-2 rounded-2xl bg-transparent" />
            <Martini size={50} className="border border-blue-300 p-2 rounded-2xl bg-transparent" />
            <Sandwich size={50} className="border border-blue-300 p-2 rounded-2xl bg-transparent" />
            <PiBowlFoodFill size={50} className="border border-blue-300 p-2 rounded-2xl bg-transparent" />
        </div>

        </div>
        <div className="flex flex-col items-center justify-center">
            <img src={bgm} className="w-100" />
        </div>

      </div>
      


    </div>
  );
}

export default Home;