import Dashboard from './LandingPage/Dashboard';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Login from './Signup/Login';
import Signup from './Signup/Signup';
import Store from './components/Store';
import View from './components/View';
import Buttons from './LoginOption/Buttons';
import TrainerLogin from './Signup/TrainerLogin';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import UserDash from './UserDashboard/UserDash';
import App1 from './ExercisePage/App1';
import Payment from './components/Payment';

function App() {
  return (
    <div >
      <Router>
        <ToastContainer position="top-center" />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/store' element={<Store />} />
          <Route path='/button' element={<Buttons />} />
          <Route path='/update/:id' element={<Signup />} />
          <Route path='/view/:id' element={<View />} />
          <Route path='/tlogin' element={<TrainerLogin />} />
          <Route path='/userdash' element={<UserDash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path='/admin-dashboard' element={<App1 />} />
          <Route path='/payment' element={<Payment/>}/>
        </Routes>
      </Router>



    </div>
  );
}

export default App;
