import "./App.css";
import AboutCapitalAcres from "./components/AboutCapitalAcres";
import AboutDeveloper from "./components/AboutDeveloper";
import Amenities from "./components/Amenities";
import BestQuotes from "./components/BestQuotes";
import Carousel from "./components/Carousel";
import Details from "./components/Details";
import DigitalCopy from "./components/DigitalCopy";
import FloorPlan from "./components/FloorPlan";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StripSection from "./components/StripSection";
import VirtualTour from "./components/VirtualTour";
import Pricing from "./components/Pricing";
import NewForm from "./components/NewForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <NewForm />
      <StripSection />
      <Details />
      <VirtualTour />
      <Pricing />
      <FloorPlan />
      <Amenities />
      <Carousel />
      <DigitalCopy />
      <AboutDeveloper />
      <AboutCapitalAcres />
      <BestQuotes />
      <Footer />
      <Form />
    </div>
  );
}

export default App;
