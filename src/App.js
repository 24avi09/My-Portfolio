import './App.scss';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import Hero from './Components/hero/Hero';
import Project from './Components/project/Project';
import Tech from './Components/tech/Tech';

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
