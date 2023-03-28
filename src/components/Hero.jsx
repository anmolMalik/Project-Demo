import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import Heart from '../assets/heart.png'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
// import Calories from '../assets/calories.png'

const Hero = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const transition = { type: 'spring', duration: 3 }
    const navigate = useNavigate()
    return (
        <div className="hero">
            <div className="blur blur-h"></div>
            <div className="left-h">
                <Header />
                {/* the best ad */}
                <div className="ad">
                    <motion.div
                        initial={{ left: mobile ? "178px" : '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}>
                    </motion.div>
                    <span>The best fitness gym in the town</span>
                </div>
                {/* hero heading */}
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Shape </span>
                        <span> Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, quaerat magnam.
                        </span>
                    </div>
                </div>
                {/* Figures */}
                <div className="figures">
                    <div>
                        <span>+20</span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span>+100</span>
                        <span>Members Joined</span>
                    </div>
                    <div>
                        <span>+20</span>
                        <span>Fitness Programs</span>
                    </div>
                </div>
                <div className="button">
                    <button className="btn" onClick={() => navigate('/signup')}>Lets Go</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn" onClick={() => navigate('/button')}>Login/Signup</button>

                <motion.div
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "4rem" }}
                    transition={transition} className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>99 bpm</span>
                </motion.div>
                <img src={hero_image} alt="" className='hero-image' />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={transition}

                    src={hero_image_back} alt="" className='hero-image-back' />

                {/* calories */}
                {/* <div className='calories'>

                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>189 kcal</span>
                    </div>
                </div> */}
            </div>


        </div>
    )
}

export default Hero
