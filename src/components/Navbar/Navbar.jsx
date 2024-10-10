import React, { useState } from 'react';
import NavMenu from './NavMenu';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const routes = [
        { "id": 1, "path": "/", "name": "Home" },
        { "id": 2, "path": "/about", "name": "About" },
        { "id": 2, "path": "/users", "name": "Users" },
        { "id": 3, "path": "/blogs", "name": "Blogs" },
        { "id": 4, "path": "/contact", "name": "Contact" },
        { "id": 4, "path": "/login", "name": "Login" },
    ];

    const [open, setOpen] = useState(false);

    return (
        <section className='p-5'>
            <div className="container m-auto max-w-screen-xl">
                <div className='flex justify-between items-center'>
                    <div className="text-3xl font-bold">Route</div>
                    <ul className={`md:flex md:static md:w-auto md:bg-transparent absolute top-20 bg-slate-300 p-5 w-[95%] gap-9 ${open ? "": "hidden"}`}>
                        {
                            routes.map(route => <NavMenu route={route} key={route.id}></NavMenu>)
                        }
                    </ul>
                    <div className='flex gap-5 items-center'>
                        <div className="header-button"><button className='btn btn-primary'>Contact</button></div>
                        <div onClick={() => setOpen(!open)} className="text-3xl font-bold md:hidden">
                            {
                                open ? <FaXmark /> : <FaBarsStaggered />
                            }


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;