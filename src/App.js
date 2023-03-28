import Dashboard from './components/Dashboard';
import ExerciseDetail from './pages/ExerciseDetail';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import App1 from './components/App1';
import Plans1 from './components/Plans1';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Store from './components/Store';
import View from './components/View';
import Trainer from './components/Trainer';
import Topbar from './components/Topbar';
import Buttons from './components/Buttons';
import TrainerLogin from './components/TrainerLogin';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div >
      <Router>
        <ToastContainer position="top-center" />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/plan' element={<Plans1 />} />
          <Route path='/admin-dashboard' element={<App1 />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/trainer' element={<Trainer />} />
          <Route exact path='/topbar' element={<Topbar />} />
          <Route path='/store' element={<Store />} />
          <Route path='/button' element={<Buttons />} />
          <Route path='/update/:id' element={<Signup />} />
          <Route path='/view/:id' element={<View />} />
          <Route path='/tlogin' element={<TrainerLogin />} />


        </Routes>
      </Router>



    </div>
  );
}

export default App;
