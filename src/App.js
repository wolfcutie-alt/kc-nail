import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Services from './components/Services';
import Feedback from './components/Feedback';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
