import Link from "next/link"
import { useRouter } from "next/router"
import { useState, useEffect, FunctionComponent } from "react"

const NavItem:FunctionComponent<{
    activeItem:string,
    setActiveItem:Function,
    route:string,
    name:string,
}> = ({ activeItem, setActiveItem, route, name}) => {
    return (
        activeItem !== name ? (
            <Link href={route}>
                    <span onClick={() => setActiveItem(name)} className='mx-2 cursor-pointer hover:border-b-4 hover:text-black hover:text-3xl'> {name} </span>
            </Link>
        ):null
    )
}

const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string>('')
    
    const { pathname } = useRouter()

    useEffect(() => {
        if (pathname === '/') setActiveItem('About')
        if (pathname === '/') setActiveItem('Projects')
        if (pathname === '/') setActiveItem('Resume')
        if (pathname === '/') setActiveItem('Blog')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return <div className="flex justify-between px-5 my-3">
        <span className="text-2xl font-bold text-blue-600 border-b-4 border-blue-500"> {activeItem} </span>
        <div className="flex space-x-3 text-blue-400 font-lg">
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='About' route='/'  />
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Projects' route='/projects'  />
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Resume' route='/resume'  />
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Blog' route='/blog'  />
        </div>
    </div>
}

export default Navbar 