import React from 'react'
import './Plan.css'
import { plansData } from '../data/plansData'
import whiteTick from '../assets/whiteTick.png'
import { useNavigate } from 'react-router-dom'

const Plan = () => {
    const navigate=useNavigate()
    return (
        <div className="plans-container">
        <div className="blur blur-1"></div>
        <div className="blur blur-2"></div>
            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span> WITH US</span>
            </div>
            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className='feature'>
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <button className="btn" onClick={() => navigate('/payment')}>Join Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plan

