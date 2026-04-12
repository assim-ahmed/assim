function Contact()
{
    return (
        <div className="contact container mx-auto my-5 px-10">
               <div className="my-3">
                <h1 className="text-3xl text-center text-white">تواصل معي </h1>
                <p className="text-lg text-gray-400 text-center">معلومات الاتصال</p>

               <div className="flex justify-between flex-col md:flex-row">
                 <div className="flex flex-col bg-blue-500/30 backdrop-blur-sm rounded-lg p-5 w-full md:w-[48%] gap-5 my-5 text-white">
                        <div>
                            <p className="text-center ">  قنوات تواصل  </p>

                            <p className="my-1">  البريد الاليكتروني : assimahmed@gmail.com </p>

                            <p className="my-1">   رقم الهاتف  : 01116594056 </p>
                            
                        </div>
                </div>

                 <div className="flex flex-col bg-blue-500/30 backdrop-blur-sm rounded-lg p-5 w-full md:w-[48%] gap-5 my-5 text-white">
                        <div>
                            <p className="text-center ">   راسلني علي   </p>

                            <p className="my-1">   الواتساب  <a href="https://wa.link/p44agc" target="_blank">
                                <button className="bg-green-600  p-2 px-4 rounded"> اضغط هنا  </button> </a></p>

                           

                        </div>
                </div>
               </div>
            </div>

        </div>
    )
}

export default Contact