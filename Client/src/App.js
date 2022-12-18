import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Cards from './Components/Cards/Cards';
import Form from './Components/ContactMe/Form';
import Footer from './Components/footer/Footer';
import Skills from './Components/Skills/Skills';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <About/>
     <Resume/>
     <Skills/>
     <Cards/>
     <Form/>
     <Footer/>
    </div>
  );
}

export default App;
