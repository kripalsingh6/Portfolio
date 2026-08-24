import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#050816] w-full min-h-screen overflow-x-hidden">
        <div className="bg-[url('/src/assets/herobg.png')] bg-cover bg-no-repeat bg-center overflow-x-clip">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0 overflow-x-clip mb-12 sm:mb-20 pb-12 sm:pb-16">
          <Contact />
          <StarsCanvas />
          
        </div>
        <Footer />
      </div>
      
    </BrowserRouter>
  );
};

export default App;
