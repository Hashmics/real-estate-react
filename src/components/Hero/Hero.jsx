import { HiLocationMarker } from 'react-icons/hi'
import './Hero.css'
import CountUp from 'react-countup'

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth hero-container flexCenter">
                {/* Left Side */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className='orange-circle' />
                        <h1>Discover <br /> more suitable <br /> Property</h1>
                    </div>
                    <div className='flexColCenter hero-des'>
                        <span>
                            Find a variety of property that suits you
                        </span>
                        <span>
                            Forgot all diffiliculties in finding a residence for you
                        </span>
                    </div>
                    <div className="flexCenter search-bar">
                        <HiLocationMarker color='var(--blue)' size={25} />
                        <input type="text" />
                        <button className="button">Search</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Premium Products</span>
                        </div>
                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customers</span>
                        </div>
                        <div className="flexColStart stat">
                            <span>
                                <CountUp end={28} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Award Winings</span>
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
