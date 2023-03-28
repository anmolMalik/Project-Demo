import React from 'react'
import './Buttons.css'
import { useNavigate } from 'react-router-dom'

const Buttons = () => {
    const navigate=useNavigate();
  return (
    <div className="button-container">
      <button className="buttons button1-primary" onClick={() => navigate('/tlogin')}>Traineer</button>
      <button className="buttons button2-secondary" onClick={() => navigate('/signup')}>User</button>
    </div>
  )
}

export default Buttons
