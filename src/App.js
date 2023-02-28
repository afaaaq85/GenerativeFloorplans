import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Banner from './Components/Banner/Banner';
import Skills from './Components/Skills/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
