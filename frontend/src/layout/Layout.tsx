import NavBar from "./NavBar";
import {AiFillInstagram} from 'react-icons/ai'

 function Layout({children}:{children: React.ReactNode}){

    return(
        <div className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center"
            style={{backgroundImage: `url('/src/assets/images/swimmingpools.jpg')`,
                filter: 'blur(20px)',
                transform: 'scale(1.1)',
            }}
            ></div>
            <div className="flex flex-col min-h-screen rounded-2xl bg-[#fdf1f5] z-10 backdrop-blur-2xl pt-7 m-9">
                <NavBar />
            <main>
                {children}
            </main>

            <footer className="bg-gray-800 text-white text-center p-4 px-0 rounded-b-2xl">
                <div className="flex flex-row gap-2 items-center justify-center p-2">
                    <h1>The Breeze Bar</h1>
                    <a
                     href="https://2gis.kz/almaty/geo/70030076312454507"
                     target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                     >
                     🗺️ View on 2GIS
                     </a>
                     <AiFillInstagram size={25} className="text-pink-500 ml-3"/>
                     <a
                    href="https://www.instagram.com/cup_of_yessil?igsh=MTRidm0yY3Y0a2MzbA=="
                    target="_blank"
                    rel="noopener noreferrer"
                     className="text-pink-500 hover:underline"
                    >
                     Instagram
                    </a>

                </div>
                <p>&copy; {new Date().getFullYear()} The Breeze Bar. All rights reserved.</p>
            </footer>
           


            </div>
             
        
        </div>
    )

}
export default Layout;