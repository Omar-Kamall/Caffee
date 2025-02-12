import { Link } from 'react-router-dom';
import { MdLocationOn , MdEmail } from "react-icons/md";
import { FaFacebookSquare, FaPhoneAlt } from 'react-icons/fa';
import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";

const links = [
    {id: 0 , name: "Home" , to: '/'},
    {id: 1 , name: "About" , to: '/about'},
    {id: 2 , name: "Contact" , to: '/contact'},
    {id: 3 , name: "Gallery" , to: '/gallery'},
]

const Footer = () => {
    
    return (
        <footer className="bg-[#3F181C] pt-5! pb-5!">
            <div className="mx-5!">
                <div className="container mx-auto! text-gray-400 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="mb-3!">
                        <h4 className="text-orange-500 text-2xl font-bold mb-5!">About Us</h4>
                        <p className='cursor-pointer hover:text-orange-400 transition duration-300'>We are committed to delivering high-quality solutions and services to meet your needs. Our mission is to empower your digital presence.</p>
                    </div>
                    <div className="mb-3!">
                        <h4 className="text-orange-500 text-2xl font-bold mb-2!">Quick Links</h4>
                        {links.map(link => (
                            <Link className='flex mb-2! hover:text-orange-400 transition duration-300' key={link.id} to={link.to}>{link.name}</Link>
                        ))}
                    </div>
                    <div className="mb-3!">
                        <h4 className="text-orange-500 text-2xl font-bold">Contact Us</h4>
                        <div className="flex items-center gap-2 mt-3!">
                            <MdLocationOn color='orange' size={20}/>
                            <span className='cursor-pointer hover:text-orange-400 transition duration-300'>123 Street Name, City, Country</span>
                        </div>
                        <div className="flex items-center gap-2 mx-1! mt-3!">
                            <FaPhoneAlt color='orange' size={13}/>
                            <span className='cursor-pointer hover:text-orange-400 transition duration-300'>01006677452</span>
                        </div>
                        <div className="flex items-center gap-2 mt-3!">
                            <MdEmail color='orange' size={18}/>
                            <span className='cursor-pointer hover:text-orange-400 transition duration-300'>omar.k.0000000@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 h-[2px] w-full mt-2!"></div>
                <div className="container mx-auto! grid grid-cols-2 md:grid-cols-2">
                    <div className="flex items-center gap-4 mt-5!">
                        <FaFacebookSquare size={20} color='#FF6900'/>
                        <SlSocialInstagram size={20} color='#FF6900'/>
                        <SlSocialLinkedin size={20} color='#FF6900'/>
                        <TiSocialTwitter size={20} color='#FF6900'/>
                    </div>
                    <div className="text-gray-300 flex justify-end items-end">
                        <span>© 2025 Omar Kamal</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer