import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbarnew from './Components/Navbarnew/Navbarnew';
import Banner from './Components/Banner/Banner';
import Features from './Components/Features/Features';
import Beta from './Components/Beta/Beta';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import { UserAuthContextProvider } from './context/UserAuthContext';

function App() {
  return (
    <div className='App'>
      <UserAuthContextProvider>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
        </Routes>
      </UserAuthContextProvider>
    </div>
    
  );
}

export default App;
