import { img14, img2, img3, img4, img5, img6 } from "../assets/photo";


const Menu = () => {
    const Data = [
        {
            id: 1,
            title: "Hot Beverages",
            desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?",
            img: img14,
        },
        {
            id: 2,
            title: "Hot Beverages",
            desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?",
            img: img2,
        },
        {
            id: 3,
            title: "Hot Beverages",
            desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?",
            img: img3,
        },
        {
            id: 4,
            title: "Hot Beverages",
            desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?",
            img: img4,
        },
        {
            id: 5,
            title: "Hot Beverages",
            desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?",
            img: img5,
        },
        {
            id: 6,
            title: "Hot Beverages",
            desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?",
            img: img6,
        },
    ];
    return (
        <section className="bg-[#252525] pb-20!">
            <div className="text-white loading">
            <div className="flex flex-col items-center text-center font-bold capitalize text-3xl pt-10! mb-10!">
                <h1>Our Menu</h1>
                <div className="bg-orange-400 w-[100px] h-[2px] mt-3!"></div>
            </div>
            <div className="container mx-auto! gap-5 px-5! w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {Data.map(item => (
                    <div key={item.id} className="">
                            <div className="bg-[#1E1E1E] p-5! rounded-2xl">
                                <img className="w-[200px] h-[250px] mb-3!" loading="lazy" src={item.img} alt="Image-Error" />
                                <h2 className="text-2xl">{item.title}</h2>
                                <p className="text-[#9CA3AF]">{item.desc}</p>
                            </div>
                    </div>
                ))}
            </div>
        </div>
        </section>
    )
}

export default Menu