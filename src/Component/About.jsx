import { img15 , img16 , img17 , img18 , img19 } from '../assets/photo';
import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
// import required modules
import { Autoplay } from 'swiper/modules';

const About = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    const Images = [
        {id: 0 , img:img15 , dec: "Amazing service and top-notch coffee!" , name: "John Doe"},
        {id: 0 , img:img16 , dec: "A perfect start to my day, every day." , name: "Jane Smith"},
        {id: 0 , img:img17 , dec: "Best coffee shop in town!" , name: "Emily Brown"},
        {id: 0 , img:img18 , dec: "Friendly staff and great ambiance." , name: "Michael Green"},
        {id: 0 , img:img19 , dec: "Love their specialty drinks!" , name: "Sarah Johnson"},
    ]
    return (
        <section className="bg-[#252525] pb-15! pt-24!">
            <div className="loading">
                <div className="flex flex-col items-center text-center text-white font-bold capitalize text-3xl pt-10! mb-10!">
                    <h1>About</h1>
                    <div className="bg-orange-400 w-[100px] h-[2px] mt-3!"></div>
                </div>
                <div className='container mx-auto!'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper"
                    >
                        {Images.map(img=> (
                            <SwiperSlide key={img.id}>
                                <div className='text-white mb-10! flex flex-col items-center'>
                                    <img loading='lazy' className='w-20 h-20 rounded-full' src={img.img} alt="Image-Error" />
                                    <p className='font-lg mt-3!'>{img.dec}</p>
                                    <h3 className='font-bold mt-2!'>- {img.name}</h3>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default About