import {useState} from "react";
import {FaHtml5} from "react-icons/fa";
import {FaCss3Alt} from "react-icons/fa";
import {FaJs} from "react-icons/fa";
import {FaReact} from "react-icons/fa";
import {DiJqueryLogo} from "react-icons/di";
import {RiTailwindCssFill} from "react-icons/ri";
import {FaBootstrap} from "react-icons/fa";
import {SiPhp} from "react-icons/si";
import {FaLaravel} from "react-icons/fa";
import {DiMysql} from "react-icons/di";
import {DiPostgresql} from "react-icons/di";
import {FaServer} from "react-icons/fa";
import {FaGitAlt} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaCode} from "react-icons/fa";
import {IoIosChatbubbles} from "react-icons/io";
import {RiTeamFill} from "react-icons/ri";
import {IoSettings} from "react-icons/io5";
import {IoIosTimer} from "react-icons/io";
import {IoSchool} from "react-icons/io5";




function Tec() {

    const [personalTec, setPersonalTec] = useState([
        {name : "Communication" , icon: <IoIosChatbubbles className="text-4xl text-gray-400" />},
        {name : "Teamwork" , icon: <RiTeamFill className="text-4xl text-gray-400" />},
        {name : "Leadership" , icon: <IoSettings className="text-4xl text-gray-400" />},
        {name : "Problem Solving" , icon: <FaCode className="text-4xl text-gray-400" />},
        {name : "Time Management" , icon: <IoIosTimer className="text-4xl text-gray-400" />},
        {name : "self-study" , icon: <IoSchool className="text-4xl text-gray-400" />},
    ]);

    const [frontendTec, setFrontendTec] = useState([
        {name: "HTML",
         icon: <FaHtml5 className="text-4xl text-gray-400" />
        },
        {name: "CSS",
         icon: <FaCss3Alt className="text-4xl text-gray-400" />
        },
        {name: "JavaScript",
         icon: <FaJs className="text-4xl text-gray-400" />
        },
         {name: "React",
         icon: <FaReact className="text-4xl text-gray-400" />
        },
         {name: "Jquery",
         icon: <DiJqueryLogo className="text-4xl text-gray-400" />
        },
         {name: "Tailwind",
         icon: <RiTailwindCssFill className="text-4xl text-gray-400" />
        },
        {name: "Bootstrap",
         icon: <FaBootstrap className="text-4xl text-gray-400" />
        },
    ]);

    const [toolsTec, setToolsTec] = useState([
        {name: "Git",
         icon: <FaGitAlt className="text-4xl text-gray-400" />
        },

        {name: "Ai Tools",
         icon: <FaCode className="text-4xl text-gray-400" />
        },

        {name: "GitHub",
         icon: <FaGithub className="text-4xl text-gray-400" />
        },

        
        {name: "OOP",
         icon: <FaCode className="text-4xl text-gray-400" />
        },
    ]);

    const [backendTec, setBackendTec] = useState([
        {name: "PHP",
         icon: <SiPhp className="text-4xl text-gray-400" />
        },
        {name: "Laravel",
         icon: <FaLaravel className="text-4xl text-gray-400" />
        },
        {name: "MySQL",
         icon: <DiMysql className="text-4xl text-gray-400" />
        },
         {name: "PostgreSQL",
         icon: <DiPostgresql className="text-4xl text-gray-400" />
        },
        {name: "Rest APIs",
         icon: <FaServer className="text-4xl text-gray-400" />
        },
    ]);

    function rendertec(tecs) {
        return tecs.map((item, index) => (
            <div key={index} className="">
                <div className="flex flex-col justify-center items-center p-2 gap-2">
                    <span>{item.icon}</span>
                    <span className="text-white">{item.name}</span>
                </div>
              
            </div>
        ));
    }


    return (
        <div className="tec container mx-auto my-5">

            <div className="flex flex-col items-center gap-3 my-5">
                <p className="text-blue-300  border rounded-lg p-2">المهارات التقنية</p>
                <p className="text-lg text-gray-400 text-center">هذه هي المهارات التقنية التي أمتلكها</p>
            </div>

            <div className="tec-items flex flex-col gap-10 justify-center md:flex-row flex-wrap">
                
                <div className="item bg-blue-500/30 backdrop-blur-sm rounded-lg p-8 w-full md:w-[45%]">

                    <div className="flex justify-center">
                        <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 w-fit pb-3 to-blue-200 bg-clip-text text-transparent border-b-3  border-blue-100"> الواجهة الامامية </p>
                    </div>

                    <div className="flex justify-center flex-wrap gap-10 mt-10">
                       {rendertec(frontendTec)}
                    </div>
                </div>

                <div className="item bg-blue-500/30 backdrop-blur-sm rounded-lg p-8 w-full md:w-[45%]">

                    <div className="flex justify-center">
                        <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 w-fit pb-3 to-blue-200 bg-clip-text text-transparent border-b-3  border-blue-100"> الواجهة الخلفية </p>
                    </div>

                    <div className="flex justify-center flex-wrap gap-10 mt-10">
                       {rendertec(backendTec)}
                    </div>
                  
                </div>

                <div className="item bg-blue-500/30 backdrop-blur-sm rounded-lg p-8 w-full md:w-[45%]">

                    <div className="flex justify-center">
                        <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 w-fit pb-3 to-blue-200 bg-clip-text text-transparent border-b-3  border-blue-100">  مهارات شخصية </p>
                    </div>

                    <div className="flex justify-center flex-wrap gap-10 mt-10">
                       {rendertec(personalTec)}
                    </div>
                  
                </div>

                <div className="item bg-blue-500/30 backdrop-blur-sm rounded-lg p-8 w-full md:w-[45%]">

                    <div className="flex justify-center">
                        <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 w-fit pb-3 to-blue-200 bg-clip-text text-transparent border-b-3  border-blue-100">  مهارات أضافية </p>
                    </div>

                    <div className="flex justify-center flex-wrap gap-10 mt-10">
                       {rendertec(toolsTec)}
                    </div>
                  
                </div>
            </div>
        </div>
    )
}
export default Tec;