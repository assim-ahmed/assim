function Projects() {
    return (
        <div className="projects container mx-auto my-5">
            <div className="my-3">
                <h1 className="text-3xl text-center text-white">المشاريع</h1>  
            <p className="text-lg text-gray-400 text-center">هذه هي المشاريع التي قمت بها</p>
            </div>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-10">

                <div className="bg-blue-500/30 backdrop-blur-sm rounded-lg p-5 w-full md:w-[23%] flex flex-col gap-5"> 

                    <p className="text-2xl font-bold text-white">مشروع 1</p>
                    <p className="text-md text-gray-400 mt-3">هذا هو وصف المشروع 1</p>
                    <button className="bg-green-500 hover:bg-green-700 text-white w-fit font-bold cursor-pointer py-2 px-4 rounded">
                         عرض المشروع
                    </button>


                </div>

                <div className="bg-blue-500/30 backdrop-blur-sm rounded-lg p-5 w-full md:w-[23%] flex flex-col gap-5"> 

                    <p className="text-2xl font-bold text-white">مشروع 2</p>
                    <p className="text-md text-gray-400 mt-3">هذا هو وصف المشروع 2</p>
                    <button className="bg-green-500 hover:bg-green-700 text-white w-fit font-bold cursor-pointer py-2 px-4 rounded">
                         عرض المشروع
                    </button>


                </div>

                <div className="bg-blue-500/30 backdrop-blur-sm rounded-lg p-5 w-full md:w-[23%] flex flex-col gap-5"> 

                    <p className="text-2xl font-bold text-white">مشروع 3</p>
                    <p className="text-md text-gray-400 mt-3">هذا هو وصف المشروع 3</p>
                    <button className="bg-green-500 hover:bg-green-700 text-white w-fit font-bold cursor-pointer py-2 px-4 rounded">
                         عرض المشروع
                    </button>


                </div>

                <div className="bg-blue-500/30 backdrop-blur-sm rounded-lg p-5 w-full md:w-[23%] flex flex-col gap-5"> 

                    <p className="text-2xl font-bold text-white">مشروع 4</p>
                    <p className="text-md text-gray-400 mt-3">هذا هو وصف المشروع 4</p>
                    <button className="bg-green-500 hover:bg-green-700 text-white w-fit font-bold cursor-pointer py-2 px-4 rounded">
                         عرض المشروع
                    </button>


                </div>

                 

            </div>
        </div>
    )
};

export default Projects