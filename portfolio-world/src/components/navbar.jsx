import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import styles from "../style.js";
import { navLinks } from "../constants";
import {logo , menu , close} from "../assets/index.js"

export default function Navbar(){
    let [status , setStatus] = useState('');

    return(
        <nav className={` ${styles.paddingX} w-full flex 
        items-center py-5 top-0 z-20
         bg-primary`}>
            <div className="w-full flex 
            justify-between 
            items-center 
            max-w-7xl 
            mx-auto">
                <Link to="/" 
                className="flex items-center gap-2"
                onClick={()=>{
                    setStatus("");
                    window.scrollTo(0, 0);
                }}>
                    <img src={logo} alt="logo" className="w-15 h-15 rounded-xl  object-contain"></img>

                    <p className="text-white text-[18px] font-bold cursor-pointer">
                        Kripal
                        <span className="sm:block hidden">FullStack Developer</span>
                    
                    </p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10"> 
                    {navLinks.map((link)=>(
                        <li>
                            <a href={`${link.id}`}></a>
                        </li>
                    ))}
                </ul>
            </div>

        </nav>
    )
}