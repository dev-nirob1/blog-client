import { useEffect, useRef, useState } from "react";
import {  NavLink } from "react-router-dom";

const NavLinks = () => {
    const [open, setOpen] = useState(false);
    const navLinksRef = useRef(null);

    const handleClickOutside = (event) => {
        if (navLinksRef.current && !navLinksRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div ref={navLinksRef} className="relative">
            <button
                className="md:hidden py-2 px-3 border rounded"
                onClick={() => setOpen(!open)}
            >
                {open ? 'Close' : 'Menu'}
            </button>
            <ul
                className={`${
                    open
                        ? 'top-14 md:top-0 right-0 md:right-auto px-5 md:px-0 py-5 md:py-0'
                        : 'md:w-0 right-0 -top-[500px]'
                } transition-all duration-500 absolute md:static bg-gray-100 md:bg-transparent flex flex-col md:flex-row items-end md:items-center md:justify-center md:gap-5 font-semibold text-neutral-700 rounded-md w-[70vw] md:w-auto`}
            >
                <li className="w-full text-end">
                    <NavLink className="block p-2 rounded-md" to="/">Home</NavLink>
                </li>
                <li className="w-full text-end">
                    <NavLink className="block p-2 rounded-md" to="/blogs">Blogs</NavLink>
                </li>
                <li className="w-full text-end">
                    <NavLink className="block p-2 rounded-md" to="/about">About</NavLink>
                </li>
                <li className="w-full text-end">
                    <NavLink className="block p-2 rounded-md" to="/category">Category</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default NavLinks;