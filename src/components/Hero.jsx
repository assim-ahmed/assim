import { FcNext } from "react-icons/fc";

function Hero() {
    return(
        <>
        <div 
        id="home"
        className="flex flex-col items-center gap-10 p-2 container mx-auto" >

            <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between md:gap-15 ">  

                        <div className="hero-image order-1 md:order-2">
                            <img 
                            src="/image/hero.png" 
                            alt="hero" 
                            className="w-100 rounded-full shadow-lg shadow-blue-500/50"
                            />
                        </div>

                        <div className="hero-info select-none order-2 md:order-1">
                            <p className="text-blue-300 w-fit border rounded-lg p-2">  مطور ويب متكامل و محاضر  </p>
                            <h1 className="text-3xl font-bold bg-gradient-to-l from-blue-200 to-blue-500 bg-clip-text text-transparent mt-5">عاصم احمد</h1>
                            <p className="text-gray-400 mt-5">  مطور ويب متكامل مع خبرة في بناء مواقع وتطبيقات ويب عالية الجودة ومحاضر في اكاديمية لتدريس البرمجة والذكاء الاصطناعي . وأسعى دائمًا لتقديم حلول مبتكرة وفعالة . </p>

                            <div className="hero-buttons mt-5 flex gap-5">
                            <a href="#contactme">
                                <button className="bg-blue-400 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                                    تواصل معي
                                </button>
                            </a>

                            </div>
                        </div> 
            </div>

            <div className="animate-bounce mb-10">
                <FcNext className="text-4xl text-blue-500 rotate-90" />
            </div>

        </div>
        </>
    )
}

export default Hero ;
