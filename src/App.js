import Dashboard from './components/Dashboard';
import ExerciseDetail from './pages/ExerciseDetail';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import App1 from './components/App1';
import Plans1 from './components/Plans1';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';




function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/plan' element={<Plans1/>}/>
          <Route path='/admin-dashboard' element={<App1/>}/>
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          
        </Routes>
      </Router>



    </div>
  );
}

export default App;
