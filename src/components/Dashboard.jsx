import React from 'react'
import '../App.css';

import Footer from './Footer'
import Hero from './Hero'
import Join from './Join'
import Plan from './Plan'
import Program from './Program'
import Reasons from './Reasons'
import Testimonials from './Testimonials'

const Dashboard = () => {
    return (
        <div className="App">
            <Hero />
            <Program />
            <Reasons />
            <Plan />
            <Testimonials />
            <Join />
            
            <Footer />
        </div>
    )
}

export default Dashboard
