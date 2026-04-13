import { FaWhatsapp } from "react-icons/fa";

function Nav() {
    return (

        <nav className="nav bg-black/30 backdrop-blur-sm sticky top-0 left-0 w-full z-10 p-3 md:px-10 flex items-center justify-between">

            <div className="container mx-auto flex justify-between">
                <div className="">
                    <h1 className="text-2xl font-bold text-blue-500">عاصم احمد</h1>
                </div>
                <div className="nav-links">
                    <ul className="flex gap-10 items-center">

                        <a href="#home">
                            <li className="text-white hover:text-blue-500 cursor-pointer hidden md:block ">الرئيسية</li>
                        </a>

                         <a href="#about">
                            <li className="text-white hover:text-blue-500 cursor-pointer hidden md:block">من أنا</li> 
                        </a>

                        <a href="#contactme">
                            <li className="text-white hover:text-blue-500 cursor-pointer hidden md:block">تواصل</li>
                        </a>


                        


                        <a href="https://wa.link/p44agc" target="_blank">
                            <li className=" text-white bg-green-500 p-2 px-5 rounded-full cursor-pointer flex items-center gap-2">
                                <span>واتساب</span>
                                <span><FaWhatsapp className="text-lg" /></span>
                            </li>
                        </a>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav