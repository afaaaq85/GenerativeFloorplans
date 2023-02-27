import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Banner from './Components/Banner/Banner';
import Skills from './Components/Skills/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <Skills></Skills>
    </div>
  );
}

export default App;
