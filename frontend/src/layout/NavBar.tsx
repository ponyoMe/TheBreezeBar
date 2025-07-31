import { useState } from "react";
import { NavLink } from "react-router-dom";


type NavItems={
    name: string;
    path: string;
}

export const navItems: NavItems[] = [
    {
        name: "Home",
        path: "/"
    }
   ,{
    name: "Menu",
    path: "/menu"
    },{ 
    name:"About Us",
    path: "/about-us"
    },{
        name: "Order",
        path: "/order"
   }
]

function NavBar(){
    const [isActive, setIsActive] = useState('Home')

    return(
        <div className="flex flex-row items-center justify-between p-2 px-7 m-4">
            <div className="flex flex-col ">
                <h1 className="text-2xl font-bold">The Breeze Bar</h1>
                <p>Take a sip, then another sip</p>
            </div>
            <nav>
                <ul className="flex flex-row p-4 gap-2">
                    {navItems.map(item=>(
                        <NavLink to={item.path} key={item.name} onClick={() => setIsActive(item.name)} >
                            <li className={`p-2 rounded-xl ${isActive===item.name ? 'underline':''} `}>{item.name}</li>
                        </NavLink>
                    ))}
                </ul>
            </nav>
        </div>
    )

}

export default NavBar;