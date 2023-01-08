import { useState } from "react";
import ProjectCard from "../components/ProjectCard"
import ProjectNavBar from "../components/ProjectctNavBar";
import { projects as projecData } from "../data"
import { category } from "../type";

const Projects = () => {
   const [projects, setProjects] = useState(projecData)

   const [active, setActive] = useState('all')

   const handleFilterCategory = (category: category | 'all') => {
    if (category === 'all') {
        setProjects(projecData)
        setActive(category)
        return
    }

    const newArray = projecData.filter((projects) =>
    projects.category.includes(category))
    setProjects(newArray)
    setActive(category)
   }

    return(
    <div> 
        <ProjectNavBar handleFilterCategory={handleFilterCategory} active={active} />
        <div className="relative grid grid-cols-12 gap-4 my-3 shadow-md">

             {projects.map((project)=>(
                <div className="col-span-12 p-2 bg-gray-200 rounded-lg shadow sm:col-span-6 lg:col-span-4 dark:bg-dark-200" key={project.name}>
                    <ProjectCard project={project}  />
                </div>
                ))}
        </div> 
    </div> )
};






 





 















export default Projects