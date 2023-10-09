import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import img1 from '../../../img/1.jpg'
import img2 from '../../../img/2.jpg'
import img3 from '../../../img/3.jpg'
import img4 from '../../../img/4.jpg'
import img5 from '../../../img/5.jpg'
import img6 from '../../../img/6.jpg'

const Planners = () => {
    /* const [planner, setPlanner] = useState();
    console.log(planner)
    useEffect(() => {
        fetch("/public/planner.json")
            .then(res => res.json())
            .then(data => setPlanner(data))
    }, []) */

    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            //slidesPerView={'auto'}
            spaceBetween={50}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            slidesPerView={3}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className='shadow-inner'><img className='w-full h-[60vh] rounded-box' src={img1} alt="" /></SwiperSlide>
            <SwiperSlide className='shadow-inner'><img className='w-full h-[60vh] rounded-box'  src={img2} alt="" /></SwiperSlide>
            <SwiperSlide className='shadow-inner'><img className='w-full h-[60vh] rounded-box' src={img2} alt="" /></SwiperSlide>
            <SwiperSlide className='shadow-inner'><img className='w-full h-[60vh] rounded-box' src={img3} alt="" /></SwiperSlide>
            <SwiperSlide className='shadow-inner'><img className='w-full h-[60vh] rounded-box' src={img4} alt="" /></SwiperSlide>
            <SwiperSlide className='shadow-inner'><img className='w-full h-[60vh] rounded-box' src={img5} alt="" /></SwiperSlide>
            <SwiperSlide className='shadow-inner'><img className='w-full h-[60vh] rounded-box' src={img6} alt="" /></SwiperSlide>
            ...
        </Swiper>
    );
};

export default Planners;