
import './App.css';
import {NavBar} from './Component/NavBar/NavBar';
import {Hero} from './Component/HeroSection/Hero'
import { Features } from './Component/Features/Features';
import {About} from './Component/About/About'
import {Footer} from './Component/Footer/Footer'
import { Extra } from './Component/Extra/Extra';
function App() {
  return (
    <div className="App">
    <NavBar  />
    <Hero  />
    <About />
    <Features />
    <Extra />
    <Footer />
    </div>
  );
}

export default App;
