import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Banner from './Components/Banner/Banner';
import Features from './Components/Features/Features';
import Beta from './Components/Beta/Beta';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Features />
      <Beta />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
