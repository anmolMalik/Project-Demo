import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation,useNavigate} from 'react-router-dom'
import './Topbar.css'

const Topbar = () => {
    const navigate=useNavigate();
    const [activeTab, setActiveTab] = useState("Topbar");
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/topbar') {
            setActiveTab("Topbar")
        } else if (location.pathname === '/add') {
            setActiveTab("AddContact")
        } else if (location.pathname === '/about') {
            setActiveTab("About")
        }
    }, [location]);

    return (
        <div className='topbar'>
            
            <p className="pic">Trainer Dashboard</p>
            <div className="topbar-right">
                <Link to='/store'>
                    <p className={`${activeTab === "Store" ? "active" : ""}`} onClick={() => setActiveTab("Store")}>
                        Home
                    </p>
                </Link>

               <button className='button3' onClick={() => navigate('/')}>Logout</button>

            </div>

        </div>
    )
}

export default Topbar
