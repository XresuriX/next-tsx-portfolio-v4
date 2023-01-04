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
                    <span onClick={() => setActiveItem(name)}> {name} </span>
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
    }, [])
    
    return <div className="">
        <span className="Font-bold text-blue-200"> {activeItem} </span>
        <div className="flex space-x-3 text-blue-200 font-lg">
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='About' route='/'  />
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Projects' route='/projects'  />
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Resume' route='/resume'  />
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Blog' route='/blog'  />
        </div>
    </div>
}

export default Navbar 