
import { FaDownload } from "react-icons/fa";
import Tec from "./Tec";


function Aboutme() {
    return (
        <div className="aboutme container mx-auto">
        <div>
            <div className="title flex justify-center items-center">
               <div className="flex flex-col items-center gap-5">
                <p className="text-blue-300 w-fit border rounded-lg p-2 px-3 text-center">من أنا</p>
                <p className="text-white text-3xl text-center">مطور ويب متكامل</p>
                <p className="text-gray-400 text-lg text-center"> مطور ويب شغوف مع خبرة في إنشاء تطبيقات ويب متطورة وسهلة الاستخدام.</p>
                
               </div>
            </div>

            <div className="aboutme flex flex-col items-center gap-10 p-10 md:flex-row md:justify-center md:gap-8">

                <div className="aboutme-image">
                    <img src="/image/aboutme.jpeg" alt="aboutme" className="w-140 rounded-lg shadow-lg shadow-blue-500/50" />
                </div>

                <div className="aboutme-text bg-blue-500/30 backdrop-blur-sm rounded-lg p-10 flex flex-col items-center gap-5 text-sm max-w-150">

                    <p className="text-gray-400 text-lg text-center">أنا مطور ويب متكامل أمتلك خبرة عملية تتجاوز 3 سنوات في بناء وتطوير تطبيقات الويب، حيث أركز على تقديم حلول برمجية فعالة ومستدامة. أجمع في مسيرتي بين الجانب التنفيذي كمطور والجانب الأكاديمي كمدرب ومحاضر في أكاديمية متخصصة لتعليم البرمجة، مما منحني قدرة فريدة على تبسيط المفاهيم المعقدة ونقل المعرفة للأجيال الصاعدة من المبرمجين.</p>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer flex items-center gap-2">
                        <span><FaDownload className="text-lg text-white" /></span>
                       <span> تحميل السيرة الذاتية</span>
                    </button>
                </div>

            </div>
        </div>
        <Tec />
        </div> 
    );
}
export default Aboutme;