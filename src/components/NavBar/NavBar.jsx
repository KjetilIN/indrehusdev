import React from "react";
import {Link} from 'react-scroll';

import { NavButton } from "./NavButton";

export const NavBar = () => {
    const title = "Indrehus Dev </>";

    return (
        <nav className="reltaive container w-full h-3 pt-7">
            <div className="flex items-center justify-between pl-7">
                <h1 className="text-main font-jost md:text-5xl text-3xl">
                    {title}
                </h1>

                <ul className="hidden md:flex items-end gap-6">
                    <Link to="about" smooth={true}><NavButton text="About" /></Link>
                    <Link to="projects" smooth={true}><NavButton text="Projects" /></Link>
                    <Link to="contact" smooth={true}><NavButton text="Contact" /></Link>
        
                </ul>
            </div>
        </nav>
    );
};
