import './App.css';
import Header from './components/Header/Header';
import "./assets/js/script";
import Services from './components/Services/Services';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
// import Features from './components/Features/Features';
// import Qualities from './components/Qualities/Qualities';
import Info from './components/Contact/Info';
import Map from './components/Contact/Map';
import Listings from './components/Listings/Listing';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Qualities /> */}
      {/* <Features /> */}
      <Listings />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <Map />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
