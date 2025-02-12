import { img10, img11, img6, img7, img8, img9 } from "../assets/photo";

const Gallery = () => {
    const Images = [
        { id: 1, img: img6 },
        { id: 2, img: img7 },
        { id: 3, img: img8 },
        { id: 4, img: img9 },
        { id: 5, img: img10 },
        { id: 6, img: img11 },
    ];
    return (
        <section className="bg-[#3F181C] px-5! pb-15! pt-15!">
            <div className="loading z-5">
                <div className="flex flex-col items-center text-center font-bold capitalize text-3xl pt-10! mb-10!">
                    <h1 className="text-white">Gallery</h1>
                    <div className="bg-orange-400 w-[100px] h-[2px] mt-3!"></div>
                </div>
                <div className="container mx-auto! grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Images.map(img => (
                        <div key={img.id} className="overflow-hidden rounded-2xl">
                            <img className="w-full h-full transform hover:scale-105 transition duration-500" loading="lazy" src={img.img} alt="Image-Error" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery