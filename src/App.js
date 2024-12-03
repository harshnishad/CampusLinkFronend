
import './App.css';
import {NavBar} from './Component/NavBar/NavBar';
import {Hero} from './Component/HeroSection/Hero'
import { Features } from './Component/Features/Features';
import {About} from './Component/About/About'
function App() {
  return (
    <div className="App">
    <NavBar  />
    <Hero />
    <About />
    <Features />
    </div>
  );
}

export default App;
