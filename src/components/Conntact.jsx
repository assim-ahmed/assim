import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";





function Contact()
{
    return (

        <div id="contactme" className="px-3">

            <div className="flex flex-col items-center gap-3 my-5">
                <p className="text-blue-300  border rounded-lg p-2">التواصل</p>
                <p className="text-lg text-gray-400 text-center">يسعدني التواصل معك</p>
            </div>

            <div className="flex flex-col bg-[#1B211A] backdrop-blur-sm  flex flex-col items-center gap-5  md:flex-row ">

                  <div className="bg-blue-400/30 rounded-xl py-3 px-5 w-full md:w-[35%] flex flex-col items-center text-white text-lg">
                    <p  className="my-4">
                        <span>البريد الاليكتروني</span> 
                    </p>

                    <p className="flex justify-center gap-2">
                        assimahmed031@gmail.com
                         <MdEmail className="self-center"/> 
                    </p>
                </div>

                
                  <div className="bg-blue-400/30 rounded-xl py-3 px-5 w-full md:w-[35%] flex flex-col items-center text-white text-lg">
                    <p  className="my-4">
                        <span>رقم الهاتف</span> 
                    </p>

                    <p className="flex justify-center gap-2">
                        01116594056
                        <FaPhoneAlt className="self-center"/> 
                    </p>
                </div>


                 <div className="bg-blue-400/30 rounded-xl py-3  px-5 w-full md:w-[35%] flex flex-col items-center text-white text-lg">
                    <p className="my-4">
                        <span>التواصل الاجتماعي</span> 
                    </p>

                    <p className="flex justify-center gap-5">

                        <a href="https://wa.link/p44agc" target="_blank" title="whatsapp" className="text-3xl">
                            <FaWhatsapp />
                        </a> 

                        <a href="https://github.com/assim-ahme" target="_blank" title="GitHub" className="text-3xl">
                            <IoLogoGithub />
                        </a> 

                          <a href="https://www.linkedin.com/in/assim-ahmed-615988273/" target="_blank" title="LinkedIn" className="text-3xl">
                            <FaLinkedinIn />
                        </a> 

                          <a href="https://www.facebook.com/share/1VCK276bxw/?mibextid=wwXIfr" target="_blank" title="Facebook" className="text-3xl">
                            <FaFacebookF/>
                        </a> 
                    </p>
                </div>

            </div>
 
        </div>
    )
}

export default Contact