import { useState } from "react"

function Projects() {

    const [projects, setProjects] = useState([
        { name: "المشروع 1", description: "هذا هو وصف المشروع 1", link: "" },
        { name: "المشروع 2", description: "هذا هو وصف المشروع 2", link: "" },
        { name: "المشروع 3", description: "هذا هو وصف المشروع 3", link: "" },
        { name: "المشروع 4", description: "هذا هو وصف المشروع 4", link: "" },
    ]);

    function viewProject() {
        return projects.map((project) => (<div className="bg-blue-500/30 backdrop-blur-sm rounded-lg p-5 w-full md:w-[23%] flex flex-col gap-5">

            <p className="text-2xl font-bold text-white"> {project.name} </p>
            <p className="text-md text-gray-400 mt-3">   {project.description}  </p>
            <button className="bg-green-500 hover:bg-green-700 text-white w-fit font-bold cursor-pointer py-2 px-4 rounded">
                عرض المشروع
            </button>


        </div>))

    }
    return (
        <div className="projects container mx-auto px-10 my-5">
            <div className="my-3">
                <h1 className="text-3xl text-center text-white">المشاريع</h1>
                <p className="text-lg text-gray-400 text-center">هذه هي المشاريع التي قمت بها</p>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-10">

           {viewProject()}



            </div>
        </div>
    )
};

export default Projects