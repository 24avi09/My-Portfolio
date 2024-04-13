import './App.scss';
import Contact from './Components/Contact';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import Hero from './Components/hero/Hero';
import Project from './Components/project/Project';
import Tech from './Components/Tech';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Tech />
      {/* <About /> */}
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
