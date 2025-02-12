import { img12 , img3 } from "../assets/photo";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { useState } from 'react';

const links = [
    {id: 0 , name: "Home" , to: '/'},
    {id: 1 , name: "About" , to: '/about'},
    {id: 2 , name: "Contact" , to: '/contact'},
    {id: 3 , name: "Gallery" , to: '/gallery'},
    {id: 4 , name: "Support" , to: '/support'},
    {id: 5 , name: "Pricing" , to: '/pricing'}
]

const Navbar = () => {
    const [openNav , setOpenNav] = useState(false);
    return (
        <div className="bg-[#3F181C] h-15 w-full fixed z-10">
            <nav className="container mx-auto! px-5! flex justify-between items-center h-full">
                <div className="flex gap-4">
                    <Link to={'/'}><img className="w-10 h-10" loading="lazy" src={img12} alt={img3} /></Link>
                    <Link to={'/'}><h1 className="text-white text-3xl font-bold hover:text-orange-400 transition duration-400 cursor-pointer">Coffe</h1></Link>
                </div>
                <div className="hidden md:flex">
                    {links.map(link => (
                        <Link className="text-white text-[18px] m-1! px-2! py-1! hover:bg-[#7b3f45ad] hover:text-orange-400 transition duration-400 rounded" key={link.id} to={link.to}>{link.name}</Link>
                    ))}
                </div>
                <div className="hidden md:flex">
                    <button className="bg-transparent px-4! py-1.5! cursor-pointer border text-white border-white rounded hover:border-orange-400 hover:text-orange-400 transition duration-400">Get Started</button>
                </div>
                <div className="md:hidden absolute right-5">
                    {!openNav ? <FaBars onClick={() => setOpenNav(true)} className="text-white w-7 h-10 cursor-pointer hover:text-orange-400 transition duration-300" /> : 
                    <span onClick={() => setOpenNav(false)} className="text-white cursor-pointer px-3! py-2! hover:bg-[#7b3f45ad] rounded-full hover:text-orange-400 transition duration-300">X</span>}
                </div>
                <div className={`bg-[#3F181C] w-[200px] top-[50px] right-0 h-full z-10 fixed ${openNav ? "translate-x-0" : "translate-x-full"} transition duration-600`}>
                    <div className="">
                        <div className="flex flex-col mt-2! w-full">
                            {links.map(link => (
                                <Link className="text-white m-1.5! text-[20px] px-2! py-1! hover:bg-[#7b3f45ad] hover:text-orange-400 transition duration-400" key={link.id} to={link.to}>{link.name}</Link>
                            ))}
                        </div>
                        <div className="mx-2!">
                            <button className="bg-transparent mt-4! px-4! py-1.5! cursor-pointer border text-white border-white rounded hover:border-orange-400 hover:text-orange-400 transition duration-400">Get Started</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar