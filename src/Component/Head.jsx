import img3 from '../assets/coffee-hero-section.png'

const Head = () => {
    return (
        <header className="bg-[#3F181C] pt-15!">
            <div className="container mx-auto! loading overflow-y-hidden px-5! h-[100vh] items-center grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col gap-3">
                    <h3 className="text-4xl font-bold font-mono text-orange-400">Best Coffee</h3>
                    <h1 className="text-4xl font-bold text-white ">Make Your Day Great With Our Special Coffee</h1>
                    <p className="text-lg text-white">Welcome to our coffee paradise, where every bean tells a story and every cup sparks joy.</p>
                    <div className="flex gap-5">
                        <button className="bg-orange-500 text-white border border-orange-500 hover:bg-transparent hover:text-orange-500 px-3! py-2! transition duration-350 rounded-3xl">Order Now</button>
                        <button className="bg-transparent text-white border border-white hover:bg-orange-500 hover:text-white hover:border-orange-500 px-3! py-2! transition duration-350 rounded-3xl">Contact Us</button>
                    </div>
                </div>
                <div>
                    <img loading='lazy' src={img3} alt="Hero-Img" />
                </div>
            </div>
        </header>
    )
}

export default Head