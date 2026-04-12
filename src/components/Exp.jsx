function Exp() {
    return (
        <div className="exp container px-10  mx-auto my-10">
            <div className="my-3">
                <h1 className="text-3xl text-center text-white"> الخبرات</h1>
                <p className="text-lg text-gray-400 text-center">مسيرتي المهنية</p>
            </div>

            <div className="flex flex-col justify-center  md:flex-row md:flex-wrap gap-10">

                <div className="bg-blue-300/30 backdrop-blur-sm rounded-lg p-10 w-full md:w-[45%]">
                    <div className="flex flex-col gap-3 job">

                        <div className="time text-sm text-white flex items-center gap-2 bg-blue-500/30 backdrop-blur-sm rounded-lg px-3 py-1 w-fit"> 
                            اغسطس 2023 - الان
                        </div>

                        <div>
                            <p className="text-3xl font-bold text-white"> مدرب و محاضر</p>
                        </div>

                         <div>
                            <p className="text-md font-bold text-gray-300">  أكاديمية كرياتيفو  </p>
                        </div>
                       
                    </div>  
                </div>


                <div className="bg-blue-300/30 backdrop-blur-sm rounded-lg p-10 w-full md:w-[45%]">
                <div className="flex flex-col gap-3 job">

                        <div className="time text-sm text-white flex items-center gap-2 bg-blue-500/30 backdrop-blur-sm rounded-lg px-3 py-1 w-fit"> 
                            اغسطس 2023 - الان
                        </div>

                        <div>
                            <p className="text-3xl font-bold text-white">مطور ويب </p>
                        </div>

                         <div>
                            <p className="text-md font-bold text-gray-300">createivo</p>
                        </div>
                       
                    </div>
                </div>

                <div className="bg-blue-300/30 backdrop-blur-sm rounded-lg p-10 w-full md:w-[45%]">
                    <div className="flex flex-col gap-3 job">

                        <div className="time text-sm text-white flex items-center gap-2 bg-blue-500/30 backdrop-blur-sm rounded-lg px-3 py-1 w-fit"> 
                            يناير 2024 - الان
                        </div>

                        <div>
                            <p className="text-3xl font-bold text-white">مطور ويب</p>
                        </div>

                         <div>
                            <p className="text-md font-bold text-gray-300">منصات العمل الحر</p>
                        </div>
                       
                    </div>  
                </div>

            </div>

        </div>
    )
}

export default Exp;