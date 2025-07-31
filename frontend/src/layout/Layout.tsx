import NavBar from "./NavBar";

 function Layout({children}:{children: React.ReactNode}){

    return(
        <div className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center"
            style={{backgroundImage: `url('/src/assets/images/ff.jpg')`,
                filter: 'blur(20px)',
                transform: 'scale(1.1)',
            }}
            ></div>
            <div className="flex flex-col min-h-screen rounded-2xl bg-[#fdf1f5] z-10 backdrop-blur-2xl px-7 pt-7 m-9">
                <NavBar />
            <main>
                {children}
            </main>
            <footer className="bg-gray-800 text-white text-center p-4">
                <p>&copy; {new Date().getFullYear()} The Breeze Bar. All rights reserved.</p>
            </footer>


            </div>
        
        </div>
    )

}
export default Layout;