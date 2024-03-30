import './App.scss';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Project from './Components/Project';
import Tech from './Components/Tech';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Tech />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
