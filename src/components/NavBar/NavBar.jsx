import { useState } from "react";
import Link from "../Link/Link";
import { MdMenuOpen, MdOutlineClose } from "react-icons/md";

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];


    return (
        <nav className="bg-yellow-300 p-6">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <MdOutlineClose></MdOutlineClose>
                        : <MdMenuOpen></MdMenuOpen>
                }

            </div>
            <ul className={`md:flex gap-10 duration-1000 absolute md:static bg-yellow-300 p-6 shadow-lg 
            ${open ? 'top-16': '-top-60'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;