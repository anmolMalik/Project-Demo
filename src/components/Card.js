import { useNavigate } from "react-router-dom";
import "./Card.css";
import "./flip-transition.css";

function Card({onClick}) {
    const navigate=useNavigate();
  return (
    <div className="card" onClick={onClick}>
  
      <div className="card-back"><button className="buttons button1-primary" onClick={() => navigate('/tlogin')}>Traineer</button></div>
      <div className="card-front"><button className="buttons button2-secondary" onClick={() => navigate('/signup')}>User</button></div>
    </div>
  );
}

export default Card;