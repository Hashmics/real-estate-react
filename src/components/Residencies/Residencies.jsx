import './Residencies.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import data from '../../utils/Slider.json'
import { sliderSettings } from '../../utils/common.js'

const Residencies = () => {

    const swiper = useSwiper();

    return (
        <section className='r-wrapper'>
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Residence</span>
                </div>

                <Swiper{...sliderSettings}>
                    <div className="flexCenter r-buttons">
                        <button onClick={() => swiper.slidePrev()}>&lt;</button>
                        <button onClick={() => swiper.slideNext()}>&gt;</button>
                    </div>
                    {data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card">
                                <img src={card.image} alt="home" />
                                <span className="secondryText r-price">
                                    <span style={{ color: "orange" }}>$</span><span>{card.price}</span>
                                </span>

                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section >
    );
};

export default Residencies;