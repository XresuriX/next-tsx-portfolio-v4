import Bar from '../components/Bar'
import {languages, tools} from '../data'

const Resume = () => {
    return(
        <div className="px-6 py-2">
            {/* //education & exp */} 
            
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">
                        Education
                    </h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">
                            Computer Engineering
                        </h5>
                        <p className="font-semibold"> University of Technology(2022-present) </p>
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">
                        Experience
                    </h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">
                        Volunteer remote react developer · 
                        Part-time Sep 2022 - Present · 
                        </h5>
                        <p className="font-semibold">Be Good Project</p>
                    </div>
                </div>
            </div>
            <div className='grid gap-6 md:grid-cols-2'>
                <div>
                    <h5 className='my-3 text-2xl font-bold'> Languages & Frameworks </h5>
                    <div className="my-2">
                    {languages.map((language) => (
                        <Bar data={language} key={language.name} />
                    ))}
                </div>
                </div>
                <div>
                    <h5 className='my-3 text-2xl font-bold'> Tools </h5>
                    <div className="my-2">
                    {tools.map((tool) => (
                        <Bar data={tool} key={tool.name} />
                    ))}
                </div>
                </div>
            </div>
        </div>
    )    
}

export default Resume